import App from "../../App";
import "./AdditionalInformation.css"

function AddtionalInformation() {
    return <>
        <div className="informationContainer">
            <div className="menu">
                <ul>
                    <li className="menuicon"><img src="src/assets/images/rocketman_cloth.svg" alt="cloth"/></li>
                    <li className="menuicon"><img src="src/assets/images/activity.svg" alt="activity"/></li>
                    <li className="menuicon"><img src="src/assets/images/average.svg" alt="average weather"/></li>
                 </ul>
            </div>
    
            <div className="textContainer">
                <h3>Did you know ?</h3>
                <p>Mars has 2 moons called Deimos and Phobos. They are named after the two horses that pull the Roman god of war, Mars’, chariot. They may be asteroids captured by Mars’ gravity.</p>
            </div>
        
        </div>
    </>;
}

export default AddtionalInformation