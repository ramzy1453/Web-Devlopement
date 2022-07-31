import Task from '../models/tasks'
import asyncWrapper from '../middlewares/asyncWrapper'

export const getAllTasks = asyncWrapper(async(req, res) => {
    const allTask = await Task.find({})
    res.status(200).json(allTask)
})

export const getOneTask = asyncWrapper(async(req, res, next) => {
    const { id } = req.params
    const oneTask = await Task.findOne({ id })
    if (oneTask) {
        res.status(200).json(oneTask)
    } else {
        res.status(404).json({ message: `task with ${id} ID not found` })
    }
})

export const addTask = asyncWrapper(async(req, res) => {
    const newTask = await Task.create(req.body)
    res.status(200).json({ newTask })
})

export const updateTask = asyncWrapper(async(req, res) => {
    const { id } = req.params
    const updatedTask = await Task.findOneAndUpdate({ id }, req.body, { new: true })
    if (updatedTask) {
        res.status(200).json(oneTask)
    } else {
        res.status(404).json({ message: `could not update an unexistant task` })
    }
})


export const deleteTask = asyncWrapper(async(req, res) => {
    const { id } = req.params
    const deletedTask = await Task.findOneAndDelete({ id })
    if (deletedTask) {
        res.status(200).json(oneTask)
    } else {
        res.status(404).json({ message: `could not delete an unexistant task` })
    }

})

export const deleteAllTasks = asyncWrapper(async(req, res) => {
    await Task.deleteMany({})
    res.status(200).json({ succes: true })
})

export const getTaskCount = asyncWrapper(async(req, res) => {
    const count = await Task.count()
    res.status(200).json({ count })
})