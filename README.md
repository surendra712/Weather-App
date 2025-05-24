# Weather Forecast Application

A React-based web application that displays current weather and a 7-day forecast for any city. The app uses OpenWeatherMap API to fetch weather data and Chart.js for data visualization.

![Weather App Screenshot](screenshot.png)

## Features

- Search for weather by city name
- Automatic detection of user's location (with fallback to London)
- Display of current weather conditions including:
  - Temperature
  - Weather condition with icon
  - Humidity
  - Wind speed
  - Date and time
- 7-day weather forecast with:
  - Daily temperature (min/max)
  - Weather conditions
  - Humidity
  - Wind speed
- Interactive charts showing:
  - Temperature trends over 7 days
  - Humidity trends over 7 days
- Responsive design for all device sizes

## Technologies Used

- React.js
- Chart.js and react-chartjs-2 for data visualization
- Axios for API requests
- OpenWeatherMap API for weather data
- Geolocation API for user location detection
- CSS for styling

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-notification/weather-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Navigate to your API keys section
   - Copy your API key

4. Update the API key in the application:
   - Open `src/services/weatherService.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

5. Start the development server:
   ```
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

1. When the app loads, it will attempt to get your current location to show local weather.
2. If location access is denied or unavailable, it will default to showing weather for London.
3. Use the search bar to enter any city name and press Enter or click the Search button.
4. View the current weather conditions in the top section.
5. Scroll down to see temperature and humidity charts for the next 7 days.
6. Below the charts, view detailed daily forecasts for the next 7 days.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects the app from Create React App

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Chart.js](https://www.chartjs.org/) for the charting library
- [Create React App](https://github.com/facebook/create-react-app) for the project setup
