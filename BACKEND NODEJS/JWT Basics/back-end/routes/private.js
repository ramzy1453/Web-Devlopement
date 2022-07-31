import { Router } from 'express'
import { getDashboardPrivate, getOneClientPrivate } from '../controllers/private'
import authToken from '../middlewares/authToken'

const router = Router()

router.use(authToken())

router.route('/dashboard')
    .get(getDashboardPrivate)

router.route('/dashboard/id/:id')
    .get(getOneClientPrivate)




export default router