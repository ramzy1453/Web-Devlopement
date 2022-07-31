import jwt from 'jsonwebtoken'
import ErrorAPI from '../errors/ErrorAPI'
import { StatusCodes } from 'http-status-codes'

export const login = (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new ErrorAPI('username or password not defined')
    }
    if (username !== 'eren' || password !== 'glory') {
        throw new ErrorAPI("Ennemy detected!", StatusCodes.BAD_REQUEST)
    }

    const token = jwt.sign({ username, password }, process.env.JWT_SECRET, { expiresIn: 60 })
    res.status(200).json({
        message: `Authorized, welcome ${username}`,
        token
    })
}