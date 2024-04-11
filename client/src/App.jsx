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
          <div className="weather">
            <ActualWeather
              currentTemperature={weatherData.current.temperature_2m}
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
              <AdditionalInformation />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
