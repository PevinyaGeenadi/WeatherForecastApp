import axios from "axios";
import { apiKey } from "../constants/api";

const forecastEndpoint = (params: { cityName: string, days: number }) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationsEndpoint = (params: { cityName: string }) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const getWeather = async (endpoint: string) => {
    const options = {
        method: 'GET',
        url: endpoint,
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('Error fetching weather data:', error);
        return null;
    }
  };

export const fetchWeatherForecast = (params: { cityName: string, days: number }) => {
    return getWeather(forecastEndpoint(params));
}

export const fetchLocations = (params: { cityName: string }) => {
    return getWeather(locationsEndpoint(params));
}