import { useContext } from "react";
import Activities from "../components/Acitvities/ActivitiesComponents/Activities";
import { IndexCurrentWeather } from "../Contexts/IndexCurrentWeather";

export default function ActivitiesPage() {
  const { weatherData, currentWeather } = useContext(IndexCurrentWeather);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Activities currentWeather={currentWeather} />
    </div>
  );
}
