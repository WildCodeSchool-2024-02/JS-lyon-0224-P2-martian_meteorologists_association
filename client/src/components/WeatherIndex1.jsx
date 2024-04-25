import { useEffect } from "react";

export default function WeatherIndex({windSpeed, opacity, snowFall, setCurrentWeather, isDay})
{
  useEffect(() => {
    // day or night
    const day = isDay ? "day" : "night";
    switch (true) {
      case windSpeed > 60:
        setCurrentWeather(4);
        break;
      case opacity > 50:
        setCurrentWeather(0);
        break;
      case snowFall > 0:
        setCurrentWeather(2);
        break;
      case (windSpeed > 60 && opacity > 50) || (snowFall > 0 && windSpeed > 60):
        setCurrentWeather(3);
        break;
      default:
        setCurrentWeather(day === "day" ? 1 : 5);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windSpeed, opacity, snowFall, isDay]);}