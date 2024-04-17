import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../App.css";

import WeatherContainer from "../components/WeatherContainer/WeatherContainer";
import CurrentWeather from "../components/ActualWeather/CurrentWeather";
import AdditionalInformation from "../components/AdditionalInformation/AdditionalInformation";

// export const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://api.open-meteo.com/v1/meteofrance?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,is_day,snowfall,cloud_cover,wind_speed_10m&hourly=is_day,sunshine_duration,direct_radiation&daily=sunrise,sunset&timezone=Europe%2FBerlin"
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// };
// const loader = async () => {
//   const weatherData = await fetchData();
//   return weatherData;
// };

function HomePage() {
  const weatherData = useLoaderData();

  const [currentWeather, setCurrentWeather] = useState(1);
  return (
    <>
      (
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
    </>
  );
}

export default HomePage;
