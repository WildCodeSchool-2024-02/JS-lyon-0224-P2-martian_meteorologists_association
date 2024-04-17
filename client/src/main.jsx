import React from "react";
import ReactDOM from "react-dom/client";
// import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import fetchData from "./API/WeatherComponent";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchData(),
        id: "API" 
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
