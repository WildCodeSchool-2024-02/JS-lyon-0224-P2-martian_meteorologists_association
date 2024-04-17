import "./Reservation.css";

import { useState } from "react";
import ShuttleCards from "../../BDD/ShuttleCards";

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
            <button value="0" onClick={handleClick} type="submit">
              <img
                src="src/assets/images/pexels-pixabay-2159.webp"
                alt=""
                width="60px"
              />
              <h4>{ShuttleCards[0].activTy}</h4>
            </button>
          </article>

          <article className="shipChoice">
            <button value="1" onClick={handleClick} type="submit">
              <img
                src="src/assets/images/pexels-pixabay-2159.webp"
                alt=""
                width="60px"
              />
              <h4>{ShuttleCards[1].activTy}</h4>
            </button>
          </article>

          <article className="shipChoice">
            <button value="2" onClick={handleClick} type="submit">
              <img
                src="src/assets/images/pexels-pixabay-2159.webp"
                alt=""
                width="60px"
              />
              <h4>{ShuttleCards[2].activTy}</h4>
            </button>
          </article>
        </div>

        <div className="card">
          {ShuttleCards[cardIndex].image}
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
