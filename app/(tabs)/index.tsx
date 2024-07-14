import { View, Text, SafeAreaView,StyleSheet,StatusBar, Image } from 'react-native'
import React from 'react'

export default function index() {
  return (
    
    <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content" /> 
        <Image 
            blurRadius={86}
            source={require('../../assets/images/bg5.png')}
            style={styles.image}
        />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});