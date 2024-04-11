import "./WeatherContainer.css";
import PropTypes from "prop-types";

function WeatherContainer({ opasity, windSpeed, sunRise, sunSet }) {
  const opasityMars = opasity * 3;

  return (
    <div className="weatherContainer">
      <div className="windSpeed">
        <h3>
          Wind
          <br /> Speed
        </h3>
        <hr />
        <p>{windSpeed} km/h</p>
        <br />
      </div>
      <div className="opasity">
        <h3>
          Opasity
          <br />
          Atmospheric
        </h3>
        <hr />
        <p>{opasityMars} NM</p>
        <br />
      </div>
      <div className="sunPositionContainer">
        <div className="sunPosition">
          <h3>Sunrise</h3>
          <p>{sunRise}</p>
        </div>
        <span className="verticalBar" />
        <div className="sunPosition">
          <h3>Sunset</h3>
          <p>{sunSet}</p>
        </div>
      </div>
    </div>
  );
}

WeatherContainer.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  opasity: PropTypes.number.isRequired,
  sunRise: PropTypes.string.isRequired,
  sunSet: PropTypes.string.isRequired,
};

export default WeatherContainer;
