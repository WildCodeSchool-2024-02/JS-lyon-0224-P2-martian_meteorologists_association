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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores necessitatibus debitis, nesciunt dolores a enim quisquam eos labore deserunt voluptatem nam neque totam ullam, hic exercitationem facilis unde vel.</p>
            </div>
        
        </div>
    </>;
}

export default AddtionalInformation