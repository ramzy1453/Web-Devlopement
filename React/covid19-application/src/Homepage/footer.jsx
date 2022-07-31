import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faStairs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"

export const Footer = () => {
    return(
        <footer>
            <div className="first">Copyright © 2022 Eren Yeager. All Rights Reserved</div>
            <div className="conter-social">
                <a id="fb" href=""><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                <a id="ig" href=""><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                <a id="yt" href=""><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                <a id="gt" href=""><FontAwesomeIcon icon={faGithub} className="icon" /></a>
            </div>
        </footer>
    )
}