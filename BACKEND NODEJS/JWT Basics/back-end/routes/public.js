import { Router } from 'express'
import { getDashboard, getOneClient } from '../controllers/public'

const router = Router()

router.route('/dashboard')
    .get(getDashboard)

router.route('/dashboard/id/:id')
    .get(getOneClient)
export default router