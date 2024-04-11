import { useState } from "react";
import "./App.css";

import WeatherComponent from "./API/Api";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import ActualWeather from "./components/ActualWeather/ActualWeather";
import AdditionalInformation from "./components/AdditionalInformation/AdditionalInformation";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <WeatherComponent
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />

      {weatherData ? (
        <div className="mainPage">
          <ActualWeather
            currentTemperature={weatherData.current.temperature_2m}
          />
          <div className="globalInformation">
            <WeatherContainer
              opasity={weatherData.current.cloud_cover}
              windSpeed={weatherData.current.wind_speed_10m}
              sunRise={weatherData.daily.sunrise[1]}
              sunSet={weatherData.daily.sunset[1]}
            />
            <AdditionalInformation />;
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
