import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import AppText from './ui/AppText';
import {THEME} from '../constants/theme';

function Navbar({title}) {
  return (
    <View
      style={[
        styles.navbar,
        Platform.select({
          ios: styles.navbarIOS,
          android: styles.navbarAndroid,
        }),
      ]}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIOS: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.select({
      ios: THEME.MAIN_COLOR,
      android: 'white',
    }),
    fontSize: 20,
  },
});

export default Navbar;
