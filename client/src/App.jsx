import { useState } from "react";
import "./App.css";

import WeatherComponent from "./API/WeatherComponent";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import CurrentWeather from "./components/ActualWeather/CurrentWeather";
import AdditionalInformation from "./components/AdditionalInformation/AdditionalInformation";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <WeatherComponent setWeatherData={setWeatherData} />

      {weatherData ? (
        <div className="mainPage">
          {/* <Navbar /> */}
          <div className="weather">
            <CurrentWeather
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
