import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const IndexCurrentWeather = createContext();

function WeatherIndexProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/meteofrance?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,is_day,snowfall,cloud_cover,wind_speed_10m&hourly=is_day,sunshine_duration,direct_radiation&daily=sunrise,sunset&timezone=Europe%2FBerlin"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        const APIweather = await fetchData();
        if (APIweather !== null) {
          setWeatherData(APIweather);
          const day = APIweather.current.is_day ? "day" : "night";
          const opacity = APIweather.current.cloud_cover;
          const windSpeed = APIweather.current.wind_speed_10m;
          const snowFall = APIweather.current.snowfall;
          switch (true) {
            case day === "day" && opacity > 50:
              setCurrentWeather(8);
              break;
            case opacity > 60:
              setCurrentWeather(0);
              break;
            case windSpeed > 50:
              setCurrentWeather(4);
              break;
            case (windSpeed > 60 && opacity > 50) ||
              (snowFall > 0 && windSpeed > 60):
              setCurrentWeather(3);
              break;
            case snowFall > 0:
              setCurrentWeather(2);
              break;
            case day === "night" && opacity > 50:
              setCurrentWeather(5);
              break;
            case day === "night" && snowFall > 0:
              setCurrentWeather(6);
              break;
            default:
              setCurrentWeather(day === "day" ? 1 : 7);
          }
        }
      } catch (error) {
        console.error("error:", error);
      }
    };

    getWeather();
  }, []);

  const value = useMemo(
    () => ({ weatherData, currentWeather }),
    [weatherData, currentWeather]
  );

  return (

  !weatherData? <p>Loading...</p> : 
    <IndexCurrentWeather.Provider value={value}>
      {children}
    </IndexCurrentWeather.Provider>
  );
}

export { IndexCurrentWeather, WeatherIndexProvider };

WeatherIndexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
