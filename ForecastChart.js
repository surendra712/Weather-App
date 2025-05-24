import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ForecastChart = ({ forecastData }) => {
  if (!forecastData || !forecastData.daily || forecastData.daily.length === 0) {
    return <div>No forecast data available</div>;
  }

  // Format dates for the x-axis
  const labels = forecastData.daily.slice(0, 7).map(day => {
    const date = new Date(day.dt * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });

  // Extract temperature data
  const tempData = {
    labels,
    datasets: [
      {
        label: 'Max Temperature (°C)',
        data: forecastData.daily.slice(0, 7).map(day => Math.round(day.temp.max)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Min Temperature (°C)',
        data: forecastData.daily.slice(0, 7).map(day => Math.round(day.temp.min)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // Extract humidity data
  const humidityData = {
    labels,
    datasets: [
      {
        label: 'Humidity (%)',
        data: forecastData.daily.slice(0, 7).map(day => day.humidity),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '7-Day Weather Forecast',
      },
    },
  };

  return (
    <div className="forecast-charts">
      <div className="chart-container">
        <h3>Temperature Forecast</h3>
        <Line options={options} data={tempData} />
      </div>
      <div className="chart-container">
        <h3>Humidity Forecast</h3>
        <Line options={options} data={humidityData} />
      </div>
    </div>
  );
};

export default ForecastChart;