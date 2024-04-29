// import { element } from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ReservationForm.css";
import ShuttleCards from "../../BDD/ShuttleCards";
import PopUp from "./PopUp";

function ReservationForm() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [activeBtn, setActiveBtn] = useState("disValidateBtn");
  const [activeMsg, setActiveMsg] = useState("validateMsg");

  const { date } = useParams();

  const amount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(ShuttleCards[id].price * quantity);

  const inputDetails = (e) => {
    e.preventDefault();
  };

  const [allDetails, setAllDetails] = useState({
    name: "",
    lastName: "",
    user_email: "",
  });

  const handleAllDetails = (e) => {
    setAllDetails({ ...allDetails, [e.target.name]: e.target.value });
    if (
      allDetails.name !== "" &&
      allDetails.lastName !== "" &&
      allDetails.user_email !== "" &&
      allDetails.user_email.includes("@") === true &&
      allDetails.user_email.includes(".") === true
    ) {
      setIsBtnDisabled(false);
      setActiveBtn("validateBtn");
      setActiveMsg("disValidateMsg");
    }
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
                onChange={handleAllDetails}
                value={allDetails.name}
                type="text"
                name="name"
              />
            </label>
            <label>
              Lastname:
              <input
                onChange={handleAllDetails}
                value={allDetails.lastName}
                type="text"
                name="lastName"
              />
            </label>
            <label>
              Email:
              <input
                onChange={handleAllDetails}
                value={allDetails.email}
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
            <p>{date}</p>
          </div>
        </div>
        <PopUp
          onClick={inputDetails}
          name={allDetails.name}
          isBtnDisabled={isBtnDisabled}
          activeBtn={activeBtn}
          activeMsg={activeMsg}
        />
      </div>
    </div>
  );
}

export default ReservationForm;
