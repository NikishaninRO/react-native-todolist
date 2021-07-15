import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

function Todo({todo, deleteTodo}) {
  const handleLongPress = () => {
    deleteTodo(todo.id);
  };

  return (
    <TouchableOpacity
      style={styles.todo}
      onLongPress={handleLongPress}
      delayLongPress={2000}>
      <Text>{todo.title}</Text>
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
