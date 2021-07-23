import React, {useContext, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import EditModal from '../components/EditModal';
import AppCard from '../components/ui/Card';
import AppText from '../components/ui/AppText';
import AppButton from '../components/ui/AppButton';
import {THEME} from '../constants/theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {TodoContext} from '../context/todo/todoContext';
import {ScreenContext} from '../context/screen/screenContext';

function TodoScreen() {
  const [modal, setModal] = useState(false);
  const {todos, updateTodo, removeTodo} = useContext(TodoContext);
  const {todoId, changeScreen} = useContext(ScreenContext);
  const todo = todos.find(todo => todo.id === todoId);

  const handlePress = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const saveHandler = async title => {
    await updateTodo(todo.id, title);
    closeModal();
  };

  const handleRemove = () => {
    removeTodo(todo.id);
    goBack();
  };

  const goBack = () => {
    changeScreen(null);
  };

  return (
    <>
      <View>
        <AppCard style={styles.card}>
          <AppText style={styles.title}>{todo.title}</AppText>
          <AppButton onPress={handlePress}>
            <FontAwesomeIcon name="edit" size={20} />
          </AppButton>
        </AppCard>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
              <AntDesignIcon name="back" size={20} />
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton color={THEME.DANGER_COLOR} onPress={handleRemove}>
              <AntDesignIcon name="delete" size={20} />
            </AppButton>
          </View>
        </View>
      </View>
      <EditModal
        visible={modal}
        onCancel={closeModal}
        onSave={saveHandler}
        value={todo.title}
      />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
});

export default TodoScreen;
