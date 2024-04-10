import FunFacts from "../../BDD/FunFacts";

function AdditionalInformation() {
  const randomIndex = Math.floor(Math.random() * FunFacts.length);

  return (
    <div className="informationContainer">
      <div className="menu">
        <ul>
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
        <h3>Did you know?</h3>
        <p>{FunFacts[randomIndex]}</p>
      </div>
    </div>
  );
}

export default AdditionalInformation;