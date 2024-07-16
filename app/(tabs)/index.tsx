import { View, Text, SafeAreaView,StyleSheet,StatusBar, Image,TextInput,TouchableOpacity } from 'react-native'
import React , { useState }from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
 

export default function index() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
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
        <View style={[styles.searchBar, 
          { backgroundColor: showSearch ? 'rgba(255, 255, 255, 0.5)' : 'transparent' }]}>
           
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
            {locations.length > 0 && showSearch ? (
              <View style={styles.locationList}>
                {locations.map((loc, index) => {
                  let showBorder = index !== locations.length - 1;
                  let borderClass = showBorder ? styles.borderBottom : {};
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.locationItem, borderClass]}>
                      <FontAwesome name="map-marker" size={20} color="gray" />
                      <Text style={styles.locationText}>New York, USA</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          
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
    marginTop: '14%',
  
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
    paddingVertical: 1,
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  searchIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // search icon bgcolor
    borderRadius: 50,
    padding: 8,
    margin: 4,
  },
  locationList: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    marginTop: 60,
    padding: 10,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  locationText: {
    marginLeft: 10,
    color: 'black',
  },
});