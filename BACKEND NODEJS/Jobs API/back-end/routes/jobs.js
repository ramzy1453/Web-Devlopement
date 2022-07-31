import { Router } from 'express';
import {
    createJob,
    deleteAllJobs,
    deleteJob,
    getAllJobs,
    getJob,
    updateJob
} from '../controllers/jobs'

const router = Router()


router.route('/')
    .get(getAllJobs)
    .delete(deleteAllJobs)
    .post(createJob)

router.route('/id/:id')
    .get(getJob)
    .patch(updateJob)
    .delete(deleteJob)


export default router