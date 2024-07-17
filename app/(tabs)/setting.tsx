import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function setting() {

  return (
    <View style={styles.main}>
      <View>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Weather</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Temperature Unit</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Privacy Policy</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Weather</Text> 
          </TouchableOpacity>
        
      </View>
      <View style={styles.copyright}>
        <Text style={styles.textlite}>©2024 Weather™. All Rights Reserved.</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightblue', 
    justifyContent: 'space-between',
    padding: 20, 
  },
  text: {
    color: 'rgba(0, 0, 0, 0.9)', 
    fontSize: 16, 
    fontWeight: '500', 
  },
  textlite: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 12, 
  },
  option: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16, 
    paddingHorizontal: 20,
  },
  copyright: {
    alignItems: 'center',
    paddingBottom: 20,
  },

});