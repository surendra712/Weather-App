import axios from 'axios';

// You'll need to sign up for an API key at OpenWeatherMap
// https://openweathermap.org/api
const API_KEY = '5e0b37ed4acc3c2baeb7ddd752acea41';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get current weather data
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

// Get 7-day forecast data
export const getForecast = async (city) => {
  try {
    // First get coordinates from city name
    const currentWeather = await getCurrentWeather(city);
    const { lat, lon } = currentWeather.coord;
    
    // Then get the forecast using coordinates
    const response = await axios.get(`${BASE_URL}/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'minutely,hourly,alerts',
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

// Get user's current position
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          reject(error);
        }
      );
    }
  });
};

// Get weather by coordinates
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw error;
  }
};

// Get forecast by coordinates
export const getForecastByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'minutely,hourly,alerts',
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast by coordinates:', error);
    throw error;
  }
};