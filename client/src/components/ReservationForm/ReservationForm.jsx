import "./ReservationForm.css";
import PropTypes from "prop-types";
import ShuttleCards from "../../BDD/ShuttleCards";

export default function ReservationForm({ cardIndex }) {
  return (
    <div>
      <h1>Reservation form</h1>
      <div className="formContainer">
        <div className="personalDetailsContainer">
          <form id="inputForm">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Surname:
              <input type="text" name="surName" />
            </label>
            <label>
              Email:
              <input type="email" name="user_email" />
            </label>
          </form>
          <div className="chosenShipContainer">
            <div className="chosenShip">
              <img src={ShuttleCards[cardIndex].image} alt="ShuttleCard" />
            </div>
            <h3>{ShuttleCards[cardIndex].activTy}</h3>
            <p>{ShuttleCards[cardIndex].price}</p>
          </div>
        </div>
        <button type="submit" className="validateBtn">
          Validate
        </button>
      </div>
    </div>
  );
}

ReservationForm.propTypes = {
  cardIndex: PropTypes.number.isRequired,
};
