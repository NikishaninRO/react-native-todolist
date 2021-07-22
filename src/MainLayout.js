import React, {useContext} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Navbar from './components/Navbar';
import {THEME} from './constants/theme';
import MainScreen from './screens/MainScreen';
import {ScreenContext} from './context/screen/screenContext';
import TodoScreen from './screens/TodoScreeen';

function MainLayout() {
  const screenContext = useContext(ScreenContext);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Todo App" />
      <View style={styles.wrapper}>
        {!screenContext.todoId ? <MainScreen /> : <TodoScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});

export default MainLayout;
