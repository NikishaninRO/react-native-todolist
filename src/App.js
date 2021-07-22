import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreeen';
import Navbar from './components/Navbar';
import {THEME} from './constants/theme';

function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: '1', title: 'Выучить React Native'},
    {id: '2', title: 'Написать приложение'},
  ]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = todoId => {
    const todo = todos.find(todo => todo.id === todoId);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${todo.title}`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== todoId));
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const updateTodo = (id, title) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      }),
    );
  };

  const goBack = () => {
    setTodoId(null);
  };

  let content = !todoId ? (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      openTodo={setTodoId}
    />
  ) : (
    <TodoScreen
      todo={todos.find(todo => todo.id === todoId)}
      goBack={goBack}
      onRemove={deleteTodo}
      onSave={updateTodo}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Todo App" />
      <View style={styles.wrapper}>{content}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});

export default App;
