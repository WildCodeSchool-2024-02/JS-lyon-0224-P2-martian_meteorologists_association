import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import "./Reservation.css";
// import Pedalo from "./Pedalo";
// import Classic from "./Classic";
// import Premuim from "./Premuim";
import ShuttleCards from "../../../BDD/ShuttleCards";

export default function Reservation() {
  const [cardIndex, setCardIndex] = useState(0);
  const handleClick = (event) => {
    const infoIndex = parseInt(event.currentTarget.value, 10);
    setCardIndex(infoIndex);
  };
  return (
    <div>
      <h1>choose your shuttle</h1>

      <div className="shipContainer">
        <div className="shipCards">
          <article className="shipChoice">
            <button
              value="0"
              onClick={handleClick}
              type="submit"
              className="selectShuttle"
            >
              <img
                src={ShuttleCards[0].image}
                alt={ShuttleCards[0].activTy}
                width="60px"
              />
              <h4>{ShuttleCards[0].activTy}</h4>
            </button>
          </article>

          <article className="shipChoice">
            <button
              value="1"
              onClick={handleClick}
              type="submit"
              className="selectShuttle"
            >
              <img
                src={ShuttleCards[1].image}
                alt={ShuttleCards[1].activTy}
                width="60px"
              />
              <h4>{ShuttleCards[1].activTy}</h4>
            </button>
          </article>

          <article className="shipChoice">
            <button
              value="2"
              onClick={handleClick}
              type="submit"
              className="selectShuttle"
            >
              <img
                src={ShuttleCards[2].image}
                alt={ShuttleCards[2].activTy}
                width="60px"
              />
              <h4>{ShuttleCards[2].activTy}</h4>
            </button>
          </article>
        </div>

        <div className="card">
          <div className="suttle3d">
            <Canvas
              className="canva3d"
              camera={{ position: [-15, 5, -10] }} // Set initial camera position for zoom
              gl={{ antialias: true }}
            >
              <ambientLight intensity={1.8} />
              <OrbitControls autoRotate />
              <PerspectiveCamera fov={75} near={0.1} far={1000} />
              <Suspense fallback={null}>
                {ShuttleCards[cardIndex].ship}
              </Suspense>
            </Canvas>
          </div>
          <h2>{ShuttleCards[cardIndex].activTy}</h2>
          <p>{ShuttleCards[cardIndex].description}</p>
        </div>
      </div>

      <div className="dateChoice">
        <label className="datesContainer">
          <p>select your dates</p>
          <input type="date" className="date" name="date" />
        </label>

        <div className="validationButton">
          <div className="price">
            <p>price : {ShuttleCards[cardIndex].price}</p>
          </div>

          <button type="button" className="reservationButton">
            <p>validate</p>
          </button>
        </div>
      </div>
    </div>
  );
}
