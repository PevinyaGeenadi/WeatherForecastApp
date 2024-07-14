import { View, Text, SafeAreaView,StyleSheet,StatusBar, Image,TextInput,TouchableOpacity } from 'react-native'
import React , { useState }from 'react'
import { Ionicons } from '@expo/vector-icons';

 

export default function index() {
  const [showSearch, toggleSearch] = useState(false);
   return (
    
    <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content" /> 
        <Image 
            blurRadius={80}
            source={require('../../assets/images/bg3.png')}
            style={styles.image}
        />
        <SafeAreaView style={styles.innerContainer}>
        {/* This is the search section bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
          {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor="lightgray"
                style={styles.textInput}
              />
            ) : null}
            <TouchableOpacity
              style={styles.searchIcon}
              onPress={() => toggleSearch(!showSearch)}>
              <Ionicons name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
        
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  searchSection: {
    height: '7%',
    marginHorizontal: '4%',
    zIndex: 50,
    marginTop: '12%',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // searchbar bgcolor
  },
  textInput: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 10,
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  searchIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // searchbar icon bgcolor
    borderRadius: 50,
    padding: 8,
    margin: 4,
  },
});