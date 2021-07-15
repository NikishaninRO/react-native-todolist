import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

function AddTodo({onSubmit}) {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Введите название дела"
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  button: {
    height: 50,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});

export default AddTodo;
