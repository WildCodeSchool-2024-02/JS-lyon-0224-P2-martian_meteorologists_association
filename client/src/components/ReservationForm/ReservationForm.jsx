import "./ReservationForm.css";
// import ShuttleCards from "../../BDD/ShuttleCards";

export default function ReservationForm() {
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
              <img
                src="../src/assets/images/Premium_shuttle.png"
                alt="ShuttleCard"
              />
            </div>
            <h3>Your shuttle</h3>
            <p>price:$500 000 000</p>
          </div>
        </div>
        <button type="submit" className="validateBtn">
          Validate
        </button>
      </div>
    </div>
  );
}
