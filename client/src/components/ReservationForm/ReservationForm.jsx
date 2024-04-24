// import { element } from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ReservationForm.css";
import ShuttleCards from "../../BDD/ShuttleCards";
import PopUp from "./PopUp";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");
  const parsin = parseInt(ShuttleCards[id].price, 10);

  const result = parsin * quantity
  const amount = new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(result)


  const inputDetails = (e) => {
    e.preventDefault();
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
            <label>
              {" "}
              Quantity:
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                className="number"
                name="quantity"
                min="1"
                value={quantity}
              />
            </label>
          </form>
          <div className="chosenShipContainer">
            <div className="chosenShip">
              <img src={ShuttleCards[id].image} alt="ShuttleCard" />
            </div>
            <h3>{ShuttleCards[id].activTy}</h3>
            <p>{amount}</p>
          </div>
        </div>
        <PopUp onClick={inputDetails} name={name} />
      </div>
    </div>
  );
}
