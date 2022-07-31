import { Router } from 'express';
import {
    getAllTasks,
    getOneTask,
    addTask,
    updateTask,
    deleteTask,
    deleteAllTasks,
    getTaskCount
} from '../controllers/tasks';

const tasksRouter = Router()

tasksRouter.route('/all')
    .get(getAllTasks)
    .post(addTask)
    .delete(deleteAllTasks)

tasksRouter.route('/id/:id')
    .get(getOneTask)
    .patch(updateTask)
    .delete(deleteTask)

tasksRouter.route('/count')
    .get(getTaskCount)

export default tasksRouter