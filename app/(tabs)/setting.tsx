import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

export default function setting() {

  return (
    <View style={styles.main}>
      <View>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Weather</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Temperature Unit</Text> 
            <Text style={styles.subText}>Celsius/°C</Text>
          <SimpleLineIcons name="arrow-right" size={12} color="rgba(0,0,0,0.6)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Privacy Policy</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>About</Text> 
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
  subText: {
    color: 'rgba(0, 0, 0, 0.6)', // Subtext color
    fontSize: 14, // Slightly smaller font size for subtext
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