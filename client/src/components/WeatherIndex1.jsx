import { useEffect } from "react";

export default function WeatherIndex({windSpeed, opacity, snowFall, setCurrentWeather}) {useEffect(() => {
    if (windSpeed > 60) {
      setCurrentWeather(4);
    } else if (opacity > 50) {
      setCurrentWeather(0);
    } else if (snowFall > 0) {
      setCurrentWeather(2);
    } else {
      setCurrentWeather(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}