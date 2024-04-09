import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = ({temperature, windSpeed, sunset, sunrise, opacity}) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/meteofrance?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,is_day,snowfall,cloud_cover,wind_speed_10m&hourly=is_day,sunshine_duration,direct_radiation&daily=sunrise,sunset&timezone=Europe%2FBerlin');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {weatherData ? (
        <div>
          <h2>Weather Data</h2>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        <h2>cloud : {weatherData.current_units.temperature_2m }</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default WeatherComponent;
﻿