import { faVirusCovid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"

export function Header(){
    return(
        <header>
            <a className="logo" href="/">
                <FontAwesomeIcon icon={faVirusCovid} className="icon-covid"/> Covid19 Map
            </a>
        </header>
    )
}

