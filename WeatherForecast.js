import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.daily || forecastData.daily.length === 0) {
    return <div>No forecast data available</div>;
  }

  return (
    <div className="forecast-container">
      <h2>7-Day Forecast</h2>
      <div className="forecast-cards">
        {forecastData.daily.slice(0, 7).map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          
          return (
            <div className="forecast-card" key={index}>
              <div className="forecast-day">{index === 0 ? 'Today' : dayName}</div>
              <div className="forecast-date">{formattedDate}</div>
              <img 
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                alt={day.weather[0].description} 
                className="forecast-icon"
              />
              <div className="forecast-description">{day.weather[0].description}</div>
              <div className="forecast-temp">
                <span className="max-temp">{Math.round(day.temp.max)}°</span>
                <span className="min-temp">{Math.round(day.temp.min)}°</span>
              </div>
              <div className="forecast-details">
                <div>Humidity: {day.humidity}%</div>
                <div>Wind: {day.wind_speed} m/s</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;