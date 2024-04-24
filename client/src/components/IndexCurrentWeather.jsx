import { useLoaderData } from "react-router-dom";

export default function IndexCurrentWeather() {
  const weatherData = useLoaderData("API2");
  if (weatherData.current.wind_speed_10m > 60) {
    return 4;
  }
  if (weatherData.current.cloud_cover > 50) {
    return 0;
  }
  if (weatherData.current.snowfall > 0) {
    return 2;
    // eslint-disable-next-line no-else-return
  } else {
    return 1;
  }
}
