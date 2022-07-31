import { faChartLine, faMap, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./styles.css"
function Homepage(){
    const navigate = useNavigate()
    return(
        <div className="conter-homepage">
            <div className="logo">
                <FontAwesomeIcon icon={faShieldVirus} className="icon" />
                Covid19 Tracker
            </div>
                <div className="title">
                    CovidTracker is a tool for monitoring the evolution of the Coronavirus epidemic around the world. For daily analysis of the figures. 
                </div>
            <div className="conter-choice">
                <div className="choice" onClick={() => {
                    navigate("/info")
                }}>
                    <FontAwesomeIcon icon={faChartLine} className="icon" />
                    <div className="name">Statistic</div>
                </div>
                <div className="choice" onClick={() => {
                    navigate("/map")
                }}>
                    <FontAwesomeIcon icon={faMap} className="icon" />
                    <div className="name">Map</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;