import { useContext } from "react";
// import { useContext } from "react";
// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Activities from "../components/Acitvities/ActivitiesComponents/Activities";
// import IndexCurrentWeather from "../Contexts/IndexCurrentWeather";
import { IndexCurrentWeather } from "../Contexts/IndexCurrentWeather";


export default function ActivitiesPage() {
  // // const { currentWeather } = useContext(IndexCurrentWeather);
  // const weatherData = useLoaderData("API2");
  // const [currentWeather, setCurrentWeather] = useState(1);
  // // console.log(currentWeather)q

  const { weatherData, currentWeather } = useContext(IndexCurrentWeather);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Activities 
      currentWeather={currentWeather}
     />
    </div>
  );
}
