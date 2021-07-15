import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

function MainScreen({todos, addTodo, deleteTodo}) {
  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        style={styles.scroll}
        data={todos}
        renderItem={({item}) => <Todo todo={item} deleteTodo={deleteTodo} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  scroll: {
    maxHeight: 450,
  },
});

export default MainScreen;
