import { useContext } from "react";
import "../App.css";
import { IndexCurrentWeather } from "../Contexts/IndexCurrentWeather";
import CurrentWeather from "../components/HomePage/CurrentWeather/CurrentWeather";
import WeatherContainer from "../components/HomePage/WeatherContainer/WeatherContainer";
import AdditionalInformation from "../components/HomePage/AdditionalInformation/AdditionalInformation";

function HomePage() {
  const { weatherData, currentWeather } = useContext(IndexCurrentWeather);

  return (
    <div className="mainPage">
      <div className="weather">
        <CurrentWeather
          currentTemperature={weatherData.current.temperature_2m}
          currentWeather={currentWeather}
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
