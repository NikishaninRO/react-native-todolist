import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './ui/AppText';

function Todo({todo, deleteTodo, openTodo}) {
  const handleLongPress = () => {
    deleteTodo(todo.id);
  };

  const handlePress = () => {
    openTodo(todo.id);
  };

  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={handlePress}
      onLongPress={handleLongPress}
      delayLongPress={2000}>
      <AppText>{todo.title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
});

export default Todo;
