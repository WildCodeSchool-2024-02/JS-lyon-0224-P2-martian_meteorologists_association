import PropTypes from "prop-types";
import "./WeatherContainer.css";

function WeatherContainer({ windSpeed, opacity, sunrise, sunset }) {
  const opacityMars = opacity * 3;
  const slicedSunrise = sunrise.slice(11, 16);
  const slicedSunset = sunset.slice(11, 16);
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
      <div className="opacity">
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
          <p>{slicedSunset}</p>
        </div>
        <span className="verticalBar" />
        <div className="sunPosition">
          <h3>Sunrise</h3>
          <p>{slicedSunrise}</p>
        </div>
      </div>
    </div>
  );
}
WeatherContainer.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};
export default WeatherContainer;
