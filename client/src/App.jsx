import "./App.css";
import WeatherComponent from "./API/Api";
import React, { useState, useEffect } from 'react';
import AddtionalInformation from "./components/AdditionalInformation/AdditionalInformation";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
     <WeatherComponent setWeatherData={setWeatherData} />
    {weatherData ? (
        <div>
          <AddtionalInformation />
          <p></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
   
  );
}

export default App;
