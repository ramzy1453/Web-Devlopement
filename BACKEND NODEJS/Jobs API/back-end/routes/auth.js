import { Router } from 'express'
import { deleteAll, login, register, getUsers } from '../controllers/auth'
const router = Router()


router.route('/register')
    .post(register)
router.route('/login')
    .post(login)
router.route('/')
    .delete(deleteAll)
    .get(getUsers)

export default router