import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ejercicio5 = () => {
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
    width: 500,
    height: 300,
    marginTop: 50,
    paddingTop: 50,
    backgroundColor: '#1868af',
    justifyContent: 'flex-end',
    alignItems: 'center'
    
  },
  boxPurple: {
    width: 100,
    height: 900,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 10,
    top: 10,
    right: 200
  },
  boxOrange: {
    width: 100,
    height: 900,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 0, 
    right: 50  
  },
  boxGreen: {
    width: 100,
    height: 900,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#0a3256',
    position: 'absolute',
    bottom: 0, 
    right: 500,  
    left: 0,
    top: 0
  }
});
