import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    backgroundColor: '#3949ab',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Navbar;
