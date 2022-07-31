import { Router } from 'express'
import { login } from '../controllers/auth'

const router = Router()

router.route('/')
    .post(login)


export default router