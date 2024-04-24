import { useContext } from "react";
import Activities from "../components/Acitvities/ActivitiesComponents/Activities";
import IndexCurrentWeather from "../Contexts/IndexCurrentWeather";

export default function ActivitiesPage() {
  const { currentWeather } = useContext(IndexCurrentWeather);
  return (
    <div>
      <Activities currentWeather={currentWeather} />
    </div>
  );
}
