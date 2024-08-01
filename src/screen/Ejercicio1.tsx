import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Ejercicio1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxCyan}></View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3C54',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxPurple: {
    width: 50,
    height: height * 0.1,
    backgroundColor: 'purple',
    position: 'absolute',
    top: height * 0.05,
    right: height * 0.05,
  },
  boxOrange: {
    width: 50,
    height: height * 0.7,
    backgroundColor: 'orange',
    position: 'absolute',
    top: height * 0.15,
    right: height * 0.05,
  },
  boxCyan: {
    width: 50,
    height: height * 0.1,
    backgroundColor: 'cyan',
    position: 'absolute',
    bottom: height * 0.05,
    right: height * 0.05,
  },
});


