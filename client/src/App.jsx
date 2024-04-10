import "./App.css";
import WeatherComponent from "./API/Api";
import React, { useState, useEffect } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
     <WeatherComponent weatherData={weatherData} setWeatherData={setWeatherData} />
    {weatherData ? (
        <div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
   
  );
}

export default App;
