import { useState } from "react";
import PropTypes from "prop-types";
import "./Activies.css";
import WeatherLogo from "../../../BDD/WeatherLogo";
import Activities from "../../../BDD/Activities";

function ActivitiesChoice({ currentWeather }) {
  const [feelValue, setFeelValue] = useState("discovery");
  const [sportValue, setSportValue] = useState("sportYes");
  const [randomIndexes, setRandomIndexes] = useState([0, 1, 2]);
  const [filteredActivities, setFilteredActivities] = useState(Activities);
  const [visibility, setVisibility] = useState("");

  // modification Onchange
  const handleFeelChange = (event) => {
    setFeelValue(event.target.value);
  };

  const handleSportChange = (event) => {
    setSportValue(event.target.value);
  };

  // Trie des activités
  const handleClick = () => {
    if (visibility === "") {
      setVisibility("todoContainerVisibility");
    }

    // Filtrer le tableau Activities en fonction des réponses
    const filteredArray = Activities.filter(
      (item) =>
        item.category.includes(feelValue) &&
        item.category.includes(sportValue) &&
        item.category.includes(WeatherLogo[currentWeather].name)
    );
    setFilteredActivities(filteredArray);

    // créer 3 nombres aléatoires pour index du tableau
    const tbl = [];
    while (tbl.length < 3) {
      const nbRandom = Math.floor(Math.random() * filteredArray.length);
      if (!tbl.includes(nbRandom)) {
        tbl.push(nbRandom);
      }
    }
    setRandomIndexes(tbl);
  };

  return (
    <>
      <h1>Activities</h1>
      <div className="activitiesContainer">
        <div className="activitiesForm">
          <form>
            <div className="activitiesQuestion">
              <article className="activitieschoice">
                <h4>How do you feel?</h4>
                <select
                  id="feel"
                  name="feel"
                  className="questionForm"
                  value={feelValue}
                  onChange={handleFeelChange}
                >
                  <option value="discovery">
                    I want to discover new stuff and go on adventures
                  </option>
                  <option value="relax">I just want to relax</option>
                </select>
              </article>

              <article className="activitieschoice">
                <h4>Are you sporty?</h4>
                <select
                  id="sporty"
                  name="sporty"
                  className="questionForm"
                  value={sportValue}
                  onChange={handleSportChange}
                >
                  <option value="sportYes">Yes</option>
                  <option value="sportNo">No</option>
                </select>
              </article>
            </div>

            <button
              type="button"
              className="activitiesValidation"
              onClick={handleClick}
            >
              <p>Validate</p>
            </button>
          </form>
        </div>

        <div className={`todoContainer ${visibility}`}>
          <h2>TO DO</h2>
          <article className="todoArticle">
            <h4>{filteredActivities[randomIndexes[0]].activity}</h4>
            <p>{filteredActivities[randomIndexes[0]].description}</p>
          </article>
          <article className="todoArticle">
            <h4>{filteredActivities[randomIndexes[1]].activity}</h4>
            <p>{filteredActivities[randomIndexes[1]].description}</p>
          </article>
          <article className="todoArticle">
            <h4>{filteredActivities[randomIndexes[2]].activity}</h4>
            <p>{filteredActivities[randomIndexes[2]].description}</p>
          </article>
        </div>
      </div>
    </>
  );
}

ActivitiesChoice.propTypes = {
  currentWeather: PropTypes.number.isRequired,
};

export default ActivitiesChoice;
