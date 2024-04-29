import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import "./Reservation.css";
import ShuttleCards from "../../../BDD/ShuttleCards";

export default function Reservation() {
  const [date, setDate] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
    setIsButtonDisabled(!isButtonDisabled);
  };

  const handleButtonClick = () => {
    window.location = `/reservation/form/${cardIndex}/${date}`;
  };

  const handleClick = (event) => {
    event.preventDefault();
    const infoIndex = parseInt(event.currentTarget.value, 10);
    setCardIndex(infoIndex);
  };

  const amount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(ShuttleCards[cardIndex].price);

  return (
    <div>
      <h1>Choose your shuttle</h1>
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
                alt={ShuttleCards[0].name}
                width="60px"
              />
              <h4>{ShuttleCards[0].name}</h4>
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
                alt={ShuttleCards[1].name}
                width="60px"
              />
              <h4>{ShuttleCards[1].name}</h4>
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
                alt={ShuttleCards[2].name}
                width="60px"
              />
              <h4>{ShuttleCards[2].name}</h4>
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
          <h2>{ShuttleCards[cardIndex].name}</h2>
          <p>{ShuttleCards[cardIndex].description}</p>
        </div>
      </div>

      <div className="dateChoice">
        <label className="datesContainer">
          <p>Choose your dates</p>
          <input
            onChange={handleChange}
            type="date"
            className="date"
            name="date"
            value={date}
          />
        </label>

        <div className="validationButton">
          <div className="price">
            <p>price : {amount} </p>
          </div>

          <button
            onClick={handleButtonClick}
            type="button"
            disabled={isButtonDisabled}
            className="reservationButton"
          >
            <p>Validate</p>
          </button>
        </div>
      </div>
    </div>
  );
}

