import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreeen';
import Navbar from './components/Navbar';

function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = itemId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== itemId));
  };

  let content = !todoId ? (
    <MainScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
  ) : (
    <TodoScreen />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Todo App" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
