import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/meteofrance?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,is_day,snowfall,cloud_cover,wind_speed_10m&hourly=is_day,sunshine_duration,direct_radiation&daily=sunrise,sunset&timezone=Europe%2FBerlin"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchData(),
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
