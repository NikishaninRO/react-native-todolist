import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import EditModal from '../components/EditModal';
import AppCard from '../components/ui/Card';
import {THEME} from '../constants/theme';

function TodoScreen({goBack, todo, onRemove, onSave}) {
  const [modal, setModal] = useState(false);

  const handlePress = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const saveHandler = title => {
    onSave(todo.id, title);
    closeModal();
  };

  return (
    <>
      <View>
        <AppCard style={styles.card}>
          <Text style={styles.title}>{todo.title}</Text>
          <Button title="Ред." onPress={handlePress} />
        </AppCard>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
          </View>
          <View style={styles.button}>
            <Button
              title="Удалить"
              color={THEME.DANGER_COLOR}
              onPress={() => onRemove(todo.id)}
            />
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
    width: '40%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TodoScreen;
