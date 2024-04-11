import PropTypes from "prop-types"
import "./WeatherContainer.css";

function WeatherContainer({windSpeed, opacity, sunrise, sunset}) {
  const opacityMars = opacity*3
  return (
    <div className="weatherContainer">
      <div className="windSpeed">
        <h3>
          Wind
          <br /> Speed
        </h3>
        <hr />
        <p>{windSpeed}km/h</p>
        <br />
      </div>
      <div className="opasity">
        <h3>
          Opacity
          <br />
          Atmospheric
        </h3>
        <hr />
        <p>{opacityMars}NM</p>
        <br />
      </div>
      <div className="sunPositionContainer">
        <div className="sunPosition">
          <h3>Sunset</h3>
          <p>{sunset}</p>
        </div>
        <span className="verticalBar" />
        <div className="sunPosition">
          <h3>Sunrise</h3>
          <p>{sunrise}</p>
        </div>
      </div>
    </div>
  );
}
WeatherContainer.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
};
export default WeatherContainer;
