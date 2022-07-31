import { faVirusCovid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"

function LoadingPage(){

    return(
        <div className="conter-total">
            <FontAwesomeIcon icon={faVirusCovid} className="icon" />
            <div className="text">Loading...</div>
        </div>
    )
}

export default LoadingPage