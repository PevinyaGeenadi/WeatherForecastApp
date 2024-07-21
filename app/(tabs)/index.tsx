import { View, Text, SafeAreaView,StyleSheet,StatusBar, Image,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react';
import { Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';

import { fetchLocations, fetchWeatherForecast } from '@/api/weatherService';
import { weatherImages } from '@/constants/api';

type WeatherCondition = {
  [key: string]: any;
};

export default function index() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc: any) => {
    console.log('Location: ', loc);
    setLocations([]);
    toggleSearch(false);
    fetchWeatherForecast({ cityName: loc.name, days: 7 }).then(data => {
      setWeather(data);
      console.log('Weather Forecast: ', data);
    })
  };

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then(data => {
        setLocations(data);
      });
    } else {
      setLocations([]);
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch,1200) ,[]);
  
  const { current, location } = weather as { current: any, location: any };

   return (
    
    <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content" /> 
        <Image 
            blurRadius={50}
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
                onChangeText={handleSearch}
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
                {locations.map((loc:any, index:number) => {
                  let showBorder = index !== locations.length - 1;
                  let borderClass = showBorder ? styles.borderBottom : {};
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.locationItem, borderClass]}
                      onPress={() => handleLocation(loc)}>
                      <FontAwesome name="map-marker" size={20} color="gray" />
                      <Text style={styles.locationText1}> {loc?.name},{loc?.region},{loc?.country}</Text>
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
          {location?.name},
            <Text style={styles.subLocationText}> 
              {" "+ location?.region}, {location?.country}
            </Text>
          </Text>
          {/* Weather icon image */}
          <View style={styles.imageContainer}>
            <Image style={styles.weatherImage} source={(weatherImages as WeatherCondition)[current?.condition?.text]}/> 
          </View>
          {/* Temperature and weather description */}
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureText}>{current?.temp_c}&#176;</Text>
            <Text style={styles.weatherDescription}>{current?.condition?.text}</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 20,
    
  },
  searchSection: {
    marginTop: '5%',
  
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // searchbar bgcolor
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
    borderRadius: 10,
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
    borderBottomColor: 'lightgray',
  },
  locationText: {
    marginLeft: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  locationText1: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
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
    height: 220,
    width: 220,
    
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
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 2,
    left: 8,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
  },
  dailyForecastItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 95,
    borderRadius: 12,
    paddingVertical: 12,
    marginRight: 16,
    
  },
  dailyForecastImage: {
    height: 40,
    width: 40,
  },
  dailyForecastDay: {
    color: 'white',
    
  },
  dailyForecastTemp: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

function debounce(fn: (value: string) => void, delay: number): (value: string) => void {
  let timer: NodeJS.Timeout;
  return (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(value), delay);
  };
}