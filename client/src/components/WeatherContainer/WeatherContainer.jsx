
import "./WeatherContainer.css";

function WeatherContainer() {
    return (
        <div className="weatherContainer">
            <div className="windSpeed">
                <h3>Wind<br /> Speed</h3>
                <hr />
                <p>40 km/h</p>
                <br />
            </div>
            <div className="opasity">
                <h3>Opasity<br />Atmospheric</h3>
                <hr />
                <p>400 NM</p>
                <br />
            </div>
            <div className="sunPositionContainer">
                <div className="sunPosition">
                    <h3>Sunset</h3>
                    <p>15:55</p>
                </div>
                <span className="verticalBar" />
                <div className="sunPosition">
                    <h3>Sunrise</h3>
                    <p>9:40</p>
                </div>
            </div>

        </div>
    );
};

export default WeatherContainer;