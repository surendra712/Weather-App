import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastChart from './components/ForecastChart';
import WeatherForecast from './components/WeatherForecast';
import { 
  getCurrentWeather, 
  getForecast, 
  getUserLocation, 
  getWeatherByCoordinates,
  getForecastByCoordinates
} from './services/weatherService';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  // Load weather data for user's location or default to London
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to get user's location
        try {
          const { lat, lon } = await getUserLocation();
          const weatherData = await getWeatherByCoordinates(lat, lon);
          const forecastData = await getForecastByCoordinates(lat, lon);
          
          setCurrentWeather(weatherData);
          setForecast(forecastData);
          setCity(weatherData.name);
        } catch (locationError) {
          console.log('Could not get user location, using default city:', locationError);
          // Default to London if we can't get user's location
          const weatherData = await getCurrentWeather('London');
          const forecastData = await getForecast('London');
          
          setCurrentWeather(weatherData);
          setForecast(forecastData);
          setCity('London');
        }
      } catch (err) {
        console.error('Error loading weather data:', err);
        setError('Failed to load weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Handle search for a new city
  const handleSearch = async (searchCity) => {
    try {
      setLoading(true);
      setError(null);
      
      const weatherData = await getCurrentWeather(searchCity);
      const forecastData = await getForecast(searchCity);
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      setCity(searchCity);
    } catch (err) {
      console.error('Error searching for city:', err);
      setError('City not found or error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Weather Forecast App</h1>
        <SearchBar onSearch={handleSearch} />
        
        {error && <div className="error-message">{error}</div>}
        
        {loading ? (
          <div className="loading">Loading weather data...</div>
        ) : (
          <>
            <div className="weather-container">
              {currentWeather && <CurrentWeather data={currentWeather} />}
            </div>
            
            <div className="forecast-section">
              {forecast && <ForecastChart forecastData={forecast} />}
              {forecast && <WeatherForecast forecastData={forecast} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
