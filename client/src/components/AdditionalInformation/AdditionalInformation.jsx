import App from "../../App";
import "./AdditionalInformation.css"
import FunFacts from "../../BDD/FunFacts";

function AddtionalInformation() {
    let RandomIndex = Math.floor(Math.random() * FunFacts.length);
    console.log(RandomIndex);
    console.log(FunFacts[0])

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
                <p>{FunFacts[RandomIndex]}</p>
            </div>
        
        </div>
    </>;
}

export default AddtionalInformation