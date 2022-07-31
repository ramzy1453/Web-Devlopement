import { faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./icons.css"

export function LoadingIndicator(){
    return(
        <div className="conter-wait">
            <FontAwesomeIcon icon={faCog} className="spin"/>
            <div className="text-loading-conter">
                <div className="text">Loading</div>
                <div className="dot-falling"></div>
            </div>
        </div>
    )
}