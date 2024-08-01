import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Ejercicio4 = () => {
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
    position: 'relative',
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -50, 
    marginLeft: -50, 
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 0,
    right: 0,
   
  },
});
