import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function setting() {

  return (
    <View style={styles.main}>
      <View>
          <View style={styles.header}>
             <TouchableOpacity style={styles.backButton}>
                 <SimpleLineIcons name="arrow-left" size={20} color="rgba(0,0,0,0.9)" onPress={() => router.back()}/>
                
             </TouchableOpacity>
                  <Text style={styles.headerText}>Weather</Text> 
          </View>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Temperature Unit</Text> 
            <Text style={styles.subText}>Celsius/°C</Text>
          <SimpleLineIcons name="arrow-right" size={12} color="rgba(0,0,0,0.6)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>Privacy Policy</Text> 
            <SimpleLineIcons name="arrow-right" size={12} color="rgba(0,0,0,0.6)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.text}>About</Text> 
            <SimpleLineIcons name="arrow-right" size={12} color="rgba(0,0,0,0.6)" />
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
    backgroundColor: 'rgba(255, 255, 240, 0.9)', 
    justifyContent: 'space-between',
    padding: 20, 
  },
  text: {
    color: 'rgba(0, 0, 0, 0.9)', 
    fontSize: 16, 
    fontWeight: '500', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
    marginTop: 40,
  },
  backButton: {
    marginRight: 10, 
  },
  headerText: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'rgba(0, 0, 0, 0.9)',
  },
  subText: {
    color: 'rgba(0, 0, 0, 0.6)', 
    fontSize: 13, 
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