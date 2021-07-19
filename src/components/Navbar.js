import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../constants/theme';

function Navbar({title}) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Navbar;
