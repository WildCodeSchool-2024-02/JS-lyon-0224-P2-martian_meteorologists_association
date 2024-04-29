export default function IndexCurrentWeatherFunction(
  day,
  opacity,
  windSpeed,
  snowFall,
  setCurrentWeather
) {
  switch (true) {
    case day === "day" && opacity > 50:
      setCurrentWeather(8);
      break;
    case opacity > 60:
      setCurrentWeather(0);
      break;
    case windSpeed > 50:
      setCurrentWeather(4);
      break;
    case (windSpeed > 60 && opacity > 50) || (snowFall > 0 && windSpeed > 60):
      setCurrentWeather(3);
      break;
    case snowFall > 0:
      setCurrentWeather(2);
      break;
    case day === "night" && opacity > 50:
      setCurrentWeather(5);
      break;
    case day === "night" && snowFall > 0:
      setCurrentWeather(6);
      break;
    default:
      setCurrentWeather(day === "day" ? 1 : 7);
  }
}
