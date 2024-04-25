import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ReservationProvider } from "./components/Contexts/ReservationChoiseContext";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ReservationProvider>
          <Outlet />
        </ReservationProvider>
      </main>
    </>
  );
}

export default App;
