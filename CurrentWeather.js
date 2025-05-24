import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  // Format date and time
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{data.name}, {data.sys.country}</h2>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <h1>{Math.round(data.main.temp)}°C</h1>
          <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
        </div>
        
        <div className="weather-icon">
          <img 
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
            alt={data.weather[0].description} 
          />
          <p>{data.weather[0].description}</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail">
          <span className="label">Humidity:</span>
          <span className="value">{data.main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind:</span>
          <span className="value">{data.wind.speed} m/s</span>
        </div>
        <div className="detail">
          <span className="label">Pressure:</span>
          <span className="value">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;