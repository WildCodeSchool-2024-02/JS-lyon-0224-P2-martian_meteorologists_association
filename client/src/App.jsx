import "./App.css";
import { useState } from "react";
import WeatherComponent from "./API/Api";
import AddtionalInformation from "./components/AdditionalInformation/AdditionalInformation";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
     <WeatherComponent setWeatherData={setWeatherData} />
    {weatherData ? (
        <div>
          <AddtionalInformation />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
   
  );
}

export default App;
