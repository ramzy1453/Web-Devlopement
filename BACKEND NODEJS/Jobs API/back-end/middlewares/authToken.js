import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { UnauthorizedErrorAPI } from "../errors/ErrorAPI"

const Authenticate = () => (req, res, next) => {

    const AuthHeaders = req.headers.authorization
    const Token = AuthHeaders && AuthHeaders.split(' ')[1]

    if (!Token) {
        //you did not register yet
        throw new UnauthorizedErrorAPI("You don't have permission to enter this")
    }
    //Token existant
    jwt.verify(Token, process.env.JWT_SECRET, (error, payload) => {
        if (error) {
            //kayen token bsa7 invalide
            throw new UnauthorizedErrorAPI('invalid Token!')
        }
        req.userID = payload.userID
        next()
    })
}

export default Authenticate