import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import Navbar from '../components/Navbar';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

function MainScreen() {
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

  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
      <View style={styles.wrapper}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          style={styles.scroll}
          data={todos}
          renderItem={({item}) => <Todo todo={item} deleteTodo={deleteTodo} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  scroll: {
    maxHeight: 450,
  },
});

export default MainScreen;
