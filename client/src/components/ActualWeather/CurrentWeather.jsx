import { useState, Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mars from "./Mars";
import "./CurrentWeather.css";
import WeatherComponent from "../../API/WeatherComponent";

const weatherLogo = [
  {
    name: "cloud",
    imgSrc: "./src/assets/weatherLogo/cloud.svg",
  },
  {
    name: "sun",
    imgSrc: "./src/assets/weatherLogo/sun.svg",
  },
  {
    name: "snow",
    imgSrc: "./src/assets/weatherLogo/snow.svg",
  },
  {
    name: "storm",
    imgSrc: "./src/assets/weatherLogo/storm.svg",
  },
  {
    name: "wind",
    imgSrc: "./src/assets/weatherLogo/wind.svg",
  },
];

function CurrentWeather({ currentTemperature }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (weatherData) {
      if (weatherData.current.wind_speed_10m > 60) {
        setCurrentWeather(4);
      } else if (weatherData.current.cloud_cover > 50) {
        setCurrentWeather(0);
      } else if (weatherData.current.snowfall > 0) {
        setCurrentWeather(2);
      } else {
        setCurrentWeather(1);
      }
    }
  }, [weatherData]);

  const temperatureMars = currentTemperature * -2;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth(); // getMonth() returns a 0-based month value (0 for January, 1 for February, and so on)
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month + 1}/${year}`; // add 1 to the month value to get the actual month
  return (
    <div className="container">
      <WeatherComponent
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
      <div className="current_weather">
        {currentWeather !== null && (
          <img
            src={weatherLogo[currentWeather].imgSrc}
            alt={weatherLogo[currentWeather].name}
            className="weatherLogo"
          />
        )}
        <div className="currentWeather_box">
          <h2>{formattedDate}</h2>
          <p>{temperatureMars}°C</p>
        </div>
      </div>
      <div className="mars">
        <Canvas>
          <ambientLight intensity={1.8} color="#ffffff" />
          <OrbitControls
            enableZoom={false}
            autoRotate
            enablePan={false}
            enableRotate={false}
          />
          <Suspense fallback={null}>
            <Mars position={[0, -4, 0]} scale={3} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentTemperature: PropTypes.number.isRequired,
};

export default CurrentWeather;
