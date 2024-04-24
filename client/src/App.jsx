// import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import IndexCurrentWeather from "./Contexts/IndexCurrentWeather";

function App() {

  return (
    <>
      <Navbar />
      <main>
          <Outlet />
      </main>
    </>
  );
}

export default App;
