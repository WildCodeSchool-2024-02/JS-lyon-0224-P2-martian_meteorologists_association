import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import fetchData from "./API/WeatherComponent";
import ReservationFormPage from "./pages/ReservationFormPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchData(),
        id: "API",
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
      },
      {
        path: "/reservation/form/:id",
        element: <ReservationFormPage />,
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
