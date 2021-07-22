import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText(props) {
  return <Text style={[styles.default, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto-Bold',
  },
});

export default AppText;
