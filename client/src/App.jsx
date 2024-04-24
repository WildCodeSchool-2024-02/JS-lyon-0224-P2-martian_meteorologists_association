import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { WeatherIndexProvider } from "./Contexts/IndexCurrentWeather";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <WeatherIndexProvider>
          <Outlet />
        </WeatherIndexProvider>
      </main>
    </>
  );
}

export default App;
