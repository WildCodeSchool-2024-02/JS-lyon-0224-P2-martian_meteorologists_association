import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const IndexCurrentWeather = createContext();

function WeatherIndexProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/meteofrance?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,is_day,snowfall,cloud_cover,wind_speed_10m&hourly=is_day,sunshine_duration,direct_radiation&daily=sunrise,sunset&timezone=Europe%2FBerlin"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, [setWeatherData]);

  useEffect(() => {
    if (weatherData) {
      if (weatherData.current.wind_speed_10m > 60) {
        setCurrentWeather(4);
      } else if (weatherData.current.cloud_cover > 50) {
        setCurrentWeather(0);
      } else if (weatherData.current.snowfall > 0) {
        setCurrentWeather(2);
      } else {
        setCurrentWeather(1);
      }
    }
  }, [weatherData]);

  const foo = useMemo(() => ({weatherData, currentWeather}), [currentWeather, weatherData]);
  return (
    <IndexCurrentWeather.Provider value={foo}>
      {children}
    </IndexCurrentWeather.Provider>
  );
}

export { IndexCurrentWeather, WeatherIndexProvider };

WeatherIndexProvider.propTypes = {
    children : PropTypes.number.isRequired,
}