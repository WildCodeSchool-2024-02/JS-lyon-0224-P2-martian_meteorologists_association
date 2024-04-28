import { useState } from "react";
import PropTypes from "prop-types";

import "./PopUp.css";

export default function PopUp({ name, isBtnDisabled, activeBtn, activeMsg }) {
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
    setTimeout(() => {
      window.location = "/";
    }, 5000);
  };

  if (popUp === true) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }

  return (
    <div>
      <div className="validBtnDiv">
        <button
          onClick={togglePopUp}
          disabled={isBtnDisabled}
          type="button"
          className={`validateBtn ${activeBtn}`}
        >
          Validate
        </button>
        <p className={`validateMsg ${activeMsg}`}>Please fill the form!</p>
      </div>
      {popUp && (
        <div className="modal">
          <button type="button" className="overlay">
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
  isBtnDisabled: PropTypes.bool.isRequired,
  activeBtn: PropTypes.string.isRequired,
  activeMsg: PropTypes.string.isRequired,
};
