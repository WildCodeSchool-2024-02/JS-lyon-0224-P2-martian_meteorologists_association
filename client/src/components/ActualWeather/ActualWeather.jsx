import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import Mars from "./Mars";
import "./ActualWeather.css";

function ActualWeather({ currentTemperature }) {
  const temperatureMars = currentTemperature * -2;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth(); // getMonth() returns a 0-based month value (0 for January, 1 for February, and so on)
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`; // add 1 to the month value to get the actual month
  return (
    <div className="container">
      <div className="current_weather">
        <div className="currentWeather_box">
          <h3>(weather icon)</h3>
          <h3>{formattedDate}</h3>
        </div>
        <p>{temperatureMars}°C</p>
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

      {/* <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} autoRotate={true} enablePan={false} enableRotate={false} />  
        
          <Mars position={[0, 0, 0]} />
        
        <Environment preset='sunset' />
        <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color={'#000000'} />
        
      </Canvas> */}
    </div>
  );
}

ActualWeather.propTypes = {
  currentTemperature: PropTypes.number.isRequired,
};
export default ActualWeather;
