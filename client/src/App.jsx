import "./App.css";

import WeatherComponent from "./API/Api";
import React, { useState, useEffect } from 'react';
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <WeatherComponent weatherData={weatherData} setWeatherData={setWeatherData} />
      {weatherData ? (
        <div>
          <WeatherContainer />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>

  );
}

export default App;
