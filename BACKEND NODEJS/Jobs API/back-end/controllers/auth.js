import { NotFoundErrorAPI, UnauthorizedErrorAPI } from '../errors/ErrorAPI'
import { StatusCodes } from 'http-status-codes'
import User from '../models/user'


export const register = async(req, res) => {
    const createdUser = await User.create({...req.body })
    const Token = createdUser.createToken()
    res.status(StatusCodes.CREATED).json({ createdUser, Token })
}

export const login = async(req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new NotFoundErrorAPI('Please provide a email and password')
    }
    const user = await User.findOne({ email })

    if (!user) {
        //user non existant
        throw new UnauthorizedErrorAPI('user not existant')
    }
    //compare password
    if (!await user.comparePassword(password)) {
        throw new UnauthorizedErrorAPI('Password does not match')
    }
    //all good
    const token = user.createToken()
    res.send({
        message: 'Connected with succes',
        username: user.username,
        token
    })
}

export const deleteAll = async(req, res) => {
    await User.deleteMany({})
    res.status(200).send({ message: 'succesful delete' })
}

export const getUsers = async(req, res) => {
    res.send(await User.find({}))
}