import "./Reservation.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ShuttleCards from "../../../BDD/ShuttleCards";

export default function Reservation({ cardIndex, setCardIndex }) {
  const handleClick = (event) => {
    const infoIndex = parseInt(event.currentTarget.value, 10);
    setCardIndex(infoIndex);
  };
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
          <img
            src={ShuttleCards[cardIndex].image}
            alt={ShuttleCards[cardIndex].activTy}
          />

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
            <NavLink to={`/reservation/form/${cardIndex}`}>
              <p>Validate</p>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  cardIndex: PropTypes.number.isRequired,
  setCardIndex: PropTypes.func.isRequired,
};
