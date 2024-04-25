import { useState } from "react";
import PropTypes from "prop-types";

import "./PopUp.css";

export default function PopUp({ name }) {
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
    
  
  };

  if (popUp === true) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }
  setTimeout(() => {
    window.location = "/"
  }, 5000);
  return (
    <div>
      <button onClick={togglePopUp} type="button" className="validateBtn">
        Validate
      </button>

      {popUp && (
        <div className="modal">
          <button onClick={setTimeout} type="button" className="overlay">
            close
          </button>
          <div className="popUp-content">
            <h2>Thank You {name}!</h2>
            <h4>We will contact you for further details.</h4>
            
          </div>
        </div>
      )}
    </div>
  );
}

PopUp.propTypes = {
  name: PropTypes.string.isRequired,
};
