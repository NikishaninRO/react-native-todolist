import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function AddTodo({onSubmit}) {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
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
      />
      <View>
        <Icon.Button name="pluscircleo" onPress={pressHandler}>
          Добавить
        </Icon.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    height: '100%',
  },
});

export default AddTodo;
