import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../App.css";

import WeatherContainer from "../components/HomePage/WeatherContainer/WeatherContainer";
import CurrentWeather from "../components/HomePage/CurrentWeather/CurrentWeather";
import AdditionalInformation from "../components/HomePage/AdditionalInformation/AdditionalInformation";

function HomePage() {
  const weatherData = useLoaderData("API");
  const [currentWeather, setCurrentWeather] = useState(1);
  return (
    <div className="mainPage">
      <div className="weather">
        <CurrentWeather
          currentTemperature={weatherData.current.temperature_2m}
          windSpeed={weatherData.current.wind_speed_10m}
          opacity={weatherData.current.cloud_cover}
          snowFall={weatherData.current.snowfall}
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
        />
      </div>

      <div className="globalInformationcontainer">
        <div className="globalInformation">
          <WeatherContainer
            windSpeed={weatherData.current.wind_speed_10m}
            opacity={weatherData.current.cloud_cover}
            sunrise={weatherData.daily.sunrise[3]}
            sunset={weatherData.daily.sunset[3]}
          />

          <AdditionalInformation CurrentWeather={currentWeather} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
