import { View, Text, SafeAreaView,StyleSheet,StatusBar, Image,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React , { useState }from 'react'
import { Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';


export default function index() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocation = (loc: number) => {
    console.log('Location: ', loc);
  };
   return (
    
    <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content" /> 
        <Image 
            blurRadius={80}
            source={require('../../assets/images/bg5.png')}
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
                      style={[styles.locationItem, borderClass]}
                      onPress={() => handleLocation(loc)}>
                      <FontAwesome name="map-marker" size={20} color="gray" />
                      <Text style={styles.locationText}>New York, USA</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
       {/* main content section for the forecast */}
       <View style={styles.content}>
          {/* Display location */}
          <Text style={styles.locationText}>
          New York,
            <Text style={styles.subLocationText}> USA</Text>
          </Text>
          {/* Weather icon image */}
          <View style={styles.imageContainer}>
            <Image style={styles.weatherImage} source={require('../../assets/images/cloudy1.png')} />
          </View>
          {/* Temperature and weather description */}
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureText}>12&#176;</Text>
            <Text style={styles.weatherDescription}>Partly Cloudy</Text>
          </View>
          {/* Weather statistics */}
          <View style={styles.statsContainer}>
            <View style={styles.statsItem}>
              <Image
                source={require('../../assets/images/sun.png')}
                style={[styles.statsIcon, { tintColor: 'white' }]}
              />
              <Text style={styles.statsText}>05:45 AM</Text>
            </View>
            <View style={styles.statsItem}>
              <Image
                source={require('../../assets/images/drop.png')}
                style={[styles.statsIcon, { tintColor: 'white' }]}
              />
              <Text style={styles.statsText}>35%</Text>
            </View>
            <View style={styles.statsItem}>
              <Image
                source={require('../../assets/images/wind.png')}
                style={[styles.statsIcon, { tintColor: 'white' }]}
              />
              <Text style={styles.statsText}>45 km/h</Text>
            </View>
          </View>
        </View>
        {/* Next Days */}
        <View style={styles.nextDaysContainer}>
          <View style={styles.dailyForecastHeader}>
            <FontAwesome5 name="calendar-day" color={'white'} size={20}  />
            <Text style={styles.dailyForecastText}>Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <View style={[styles.dailyForecastItem, { backgroundColor: 'rgba(255, 255, 255, 0.15)' }]}>
              <Image source={require('../../assets/images/rain.png')} style={styles.dailyForecastImage} />
              <Text style={styles.dailyForecastDay}>Monday</Text>
              <Text style={styles.dailyForecastTemp}>13&#176;</Text>
            </View>
            <View style={[styles.dailyForecastItem, { backgroundColor: 'rgba(255, 255, 255, 0.25)' }]}>
              <Image source={require('../../assets/images/rain.png')} style={styles.dailyForecastImage} />
              <Text style={styles.dailyForecastDay}>Tuesday</Text>
              <Text style={styles.dailyForecastTemp}>15&#176;</Text>
            </View>
            <View style={[styles.dailyForecastItem, { backgroundColor: 'rgba(255, 255, 255, 0.25)' }]}>
              <Image source={require('../../assets/images/rain.png')} style={styles.dailyForecastImage} />
              <Text style={styles.dailyForecastDay}>Wednesday</Text>
              <Text style={styles.dailyForecastTemp}>16&#176;</Text>
            </View>
            <View style={[styles.dailyForecastItem, { backgroundColor: 'rgba(255, 255, 255, 0.25)' }]}>
              <Image source={require('../../assets/images/rain.png')} style={styles.dailyForecastImage} />
              <Text style={styles.dailyForecastDay}>Thursday</Text>
              <Text style={styles.dailyForecastTemp}>11&#176;</Text>
            </View>
            <View style={[styles.dailyForecastItem, { backgroundColor: 'rgba(255, 255, 255, 0.25)' }]}>
              <Image source={require('../../assets/images/rain.png')} style={styles.dailyForecastImage} />
              <Text style={styles.dailyForecastDay}>Friday</Text>
              <Text style={styles.dailyForecastTemp}>9&#176;</Text>
            </View>
            
          </ScrollView>
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 4,
    marginBottom: 2,
  },
  subLocationText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherImage: {
    height: 240,
    width: 240,
    
  },
  temperatureContainer: {
    alignItems: 'center',
    marginVertical: 2,
    
  },
  temperatureText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 96,
    marginLeft: 5,
  },
  weatherDescription: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsIcon: {
    height: 24,
    width: 24,
  },
  statsText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 2,
  },
  nextDaysContainer: {
    marginBottom: 9,
    marginVertical: 3,
  },
  dailyForecastHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 8,
    left: 16,
  },
  dailyForecastText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 2,
    left: 8,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
  },
  dailyForecastItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    borderRadius: 24,
    paddingVertical: 12,
    marginRight: 16,
  },
  dailyForecastImage: {
    height: 44,
    width: 44,
  },
  dailyForecastDay: {
    color: 'white',
  },
  dailyForecastTemp: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});