// ui/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',     
    alignItems: 'center',         
    },
  button: {
    backgroundColor: '#e5d0ac',
    padding: 10,
    borderRadius: 20,
    width: '130',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fffefb',
    fontSize: 25,

  },
});

export default Button;
