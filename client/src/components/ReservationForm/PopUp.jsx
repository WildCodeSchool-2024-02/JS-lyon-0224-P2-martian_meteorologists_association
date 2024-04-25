import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./PopUp.css";

export default function PopUp({ name }) {
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  if (popUp) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }

  return (
    <div>
      <button onClick={togglePopUp} type="button" className="validateBtn">
        Validate
      </button>

      {popUp && (
        <div className="modal">
          <button onClick={togglePopUp} type="button" className="overlay">
            close
          </button>
          <div className="popUp-content">
            <h2>Thank You {name}!</h2>
            <h4 className="popUpMessage">
              We will contact you for further details.
            </h4>
            <button className="close-popUp" type="button">
              <NavLink to="/">CLOSE</NavLink>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

PopUp.propTypes = {
  name: PropTypes.string.isRequired,
};
