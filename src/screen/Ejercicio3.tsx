import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ejercicio3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxGreen}></View>

    </View>
  )
}

// Gestión de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: 300,
    height: 300,
    marginTop: 50,
    backgroundColor: '#1868af',
    position: 'relative', 
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 10,
    top: 0,
    right: 0
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 0, 
    right: 0  
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
    left: 0,
    top: 0
  }
});
