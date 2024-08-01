import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Ejercicio9 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxGreen}></View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#1868af',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: '#0a3256',
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'relative',
    top: 20, 
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#0a3256',
  },
});
