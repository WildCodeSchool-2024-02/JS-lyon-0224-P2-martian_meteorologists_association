import { useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = ({ setWeatherData }) => {
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

};

export default WeatherComponent;
