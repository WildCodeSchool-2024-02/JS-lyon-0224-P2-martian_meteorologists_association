// import { element } from "prop-types";
import "./ReservationForm.css";
import { useState } from "react";
// import ShuttleCards from "../../BDD/ShuttleCards";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const inputDetails = (e) => {
    e.preventDefault();
    // console.log({ name, lastName, email });
  };

  return (
    <div>
      <h1>Reservation form</h1>
      <div className="formContainer">
        <div className="personalDetailsContainer">
          <form id="inputForm">
            <label>
              Name:
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
              />
            </label>
            <label>
              Lastname:
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                name="surName"
              />
            </label>
            <label>
              Email:
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="user_email"
              />
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
        <button onClick={inputDetails} type="submit" className="validateBtn">
          Validate
        </button>
      </div>
    </div>
  );
}
