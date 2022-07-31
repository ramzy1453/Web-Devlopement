import jwt from 'jsonwebtoken'
import ErrorAPI from "../errors/ErrorAPI"
import dotenv from 'dotenv'
dotenv.config()

const authToken = () => (req, res, next) => {

    const authHeaders = req.headers.authorization

    const Token = authHeaders && authHeaders.replace('Bearer ', '')

    if (!Token) {
        throw new ErrorAPI("You don't have the right to enter this teritorry", 403)
    }
    //token defined
    jwt.verify(Token, process.env.JWT_SECRET, (error, payload) => {
        if (error) throw new ErrorAPI('Ennemy in approach! , caliphate!! attack him...!');
        //token valid
        req.token = payload
        next()
    })
}

export default authToken