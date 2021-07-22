import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import EditModal from '../components/EditModal';
import AppCard from '../components/ui/Card';
import AppText from '../components/ui/AppText';
import AppButton from '../components/ui/AppButton';
import {THEME} from '../constants/theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

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
            <AppButton
              color={THEME.DANGER_COLOR}
              onPress={() => onRemove(todo.id)}>
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
