import { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mars from "./Mars";
import "./CurrentWeather.css";
import WeatherLogo from "../../BDD/WeatherLogo";

function CurrentWeather({
  currentTemperature,
  currentWeather,
  setCurrentWeather,
  windSpeed,
  opacity,
  snowFall,
}) {
  // Récupération de l'index météo du tableau weatherLogo en fonction des conditions météo
  useEffect(() => {
    if (windSpeed > 60) {
      setCurrentWeather(4);
    } else if (opacity > 50) {
      setCurrentWeather(0);
    } else if (snowFall > 0) {
      setCurrentWeather(2);
    } else {
      setCurrentWeather(1);
    }
  });

  // modification de la température la rendre plus martienne
  const temperatureMars = currentTemperature * -2;

  // Récupération de la date
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth(); // getMonth() returns a 0-based month value (0 for January, 1 for February, and so on)
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month + 1}/${year}`; // add 1 to the month value to get the actual month
  return (
    <div className="container">
      <div className="current_weather">
        {/* changement de l'icon météo en fonction des conditions météo */}
        <img
          src={WeatherLogo[currentWeather].imgSrc}
          alt={WeatherLogo[currentWeather].name}
          className="weatherLogo"
        />

        <div className="currentWeather_box">
          <h2>{formattedDate}</h2>
          <p>{temperatureMars}°C</p>
        </div>
      </div>

      {/* Planète Mars qui tourne */}
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

// PropTypes validation
CurrentWeather.propTypes = {
  currentTemperature: PropTypes.number.isRequired,
  currentWeather: PropTypes.number.isRequired,
  setCurrentWeather: PropTypes.func.isRequired,
  opacity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  snowFall: PropTypes.number.isRequired,
};

export default CurrentWeather;
