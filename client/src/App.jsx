import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import IndexCurrentWeather from "./Contexts/IndexCurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(1);
  const foo = useMemo(
    () => ({ currentWeather, setCurrentWeather }),
    [currentWeather]
  );

  return (
    <>
      <Navbar />
      <main>
        <IndexCurrentWeather.Provider value={foo}>
          <Outlet />
        </IndexCurrentWeather.Provider>
      </main>
    </>
  );
}

export default App;
