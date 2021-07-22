import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import {THEME} from '../constants/theme';
import {ScreenContext} from '../context/screen/screenContext';
import {TodoContext} from '../context/todo/todoContext';

function MainScreen() {
  const {todos, addTodo, removeTodo} = useContext(TodoContext);
  const {changeScreen: openTodo} = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2,
  );

  useEffect(() => {
    const update = () => {
      setDeviceWidth(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2,
      );
    };
    Dimensions.addEventListener('change', update);
    return () => Dimensions.removeEventListener('change', update);
  });

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {todos.length ? (
        <View style={{width: deviceWidth}}>
          <FlatList
            style={styles.scroll}
            data={todos}
            renderItem={({item}) => (
              <Todo todo={item} deleteTodo={removeTodo} openTodo={openTodo} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={styles.imageWrap}>
          <Image
            source={require('../../assets/images/no-items.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    maxHeight: 450,
  },
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MainScreen;
