import "./AdditionalInformation1.css";
import FunFacts from "../../BDD/FunFacts";

function AdditionalInformation() {
  const randomIndex = Math.floor(Math.random() * FunFacts.length);

  return (
    <div className="globalInformationcontainer">
      <div className="informationContainer">
        <div className="menu">
          <ul className="menulist">
            <li className="menuicon">
              <img src="src/assets/images/rocketman_cloth.svg" alt="cloth" />
            </li>
            <li className="menuicon">
              <img src="src/assets/images/activity.svg" alt="activity" />
            </li>
            <li className="menuicon">
              <img src="src/assets/images/average.svg" alt="average weather" />
            </li>
          </ul>
        </div>

        <div className="textContainer">
          <h3 className="additionalh3">Did you know?</h3>
          <p className="additionalp">{FunFacts[randomIndex]}</p>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformation;
