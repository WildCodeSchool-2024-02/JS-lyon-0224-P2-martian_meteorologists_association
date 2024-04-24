// import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Activities from "../components/Acitvities/ActivitiesComponents/Activities";
// import IndexCurrentWeather from "../Contexts/IndexCurrentWeather";


export default function ActivitiesPage() {
  // const { currentWeather } = useContext(IndexCurrentWeather);
  const weatherData = useLoaderData("API2");
  const [currentWeather, setCurrentWeather] = useState(1);
  // console.log(currentWeather)q

  return (
    <div>
      <Activities 
      currentWeather={currentWeather}
      windSpeed={weatherData.current.wind_speed_10m} 
      opacity={weatherData.current.cloud_cover}
      snowfall={weatherData.current.snowfall}
      setCurrentWeather={setCurrentWeather}
      isDay={weatherData.current.is_day}/>
    </div>
  );
}
