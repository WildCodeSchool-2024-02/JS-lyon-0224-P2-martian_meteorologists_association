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
    <div className="resrvation_page">
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
      <footer className="license">
        <div className="scrolling-text">
          credits goes to: This work is based on "UFO "Rick and Morty""{" "}
          (https://sketchfab.com/3d-models/ufo-rick-and-morty-fe440d6641d2426cb69beefe7f3ec161)
          by glebchik20 (https://sketchfab.com/glebchik20) licensed under
          CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) || This work
          is based on "Space Shuttle"
          (https://sketchfab.com/3d-models/space-shuttle-ff4b00b7ebb24fdd98fb96b08f2c43c9)
          by Microsoft (https://sketchfab.com/microsoft) licensed under
          CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) || This work
          is based on "Star Trek - DSC Enterprise"
          (https://sketchfab.com/3d-models/star-trek-dsc-enterprise-98cdebaa7fae4752bcaa5a35453d224c)
          by Wholock (https://sketchfab.com/wholock) licensed under CC-BY-4.0
          (http://creativecommons.org/licenses/by/4.0/)
        </div>
      </footer>
    </div>
  );
}

