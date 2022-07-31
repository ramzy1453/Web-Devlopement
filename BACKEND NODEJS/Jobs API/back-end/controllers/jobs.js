import { StatusCodes } from "http-status-codes"
import { NotFoundErrorAPI } from "../errors/ErrorAPI"
import Job from "../models/jobs"
import User from "../models/user"

export const getAllJobs = async(req, res) => {
    const jobs = await Job.find({ createdBy: req.userID })
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

export const getJob = async(req, res) => {
    const { id } = req.params
    const job = await Job.findById({ createdBy: req.userID, _id: id })
    if (!job) {
        throw new NotFoundErrorAPI('Job non existant')
    }
    res.status(StatusCodes.OK).json({ job })

}

export const createJob = async(req, res) => {
    req.body.userID = req.userID
    const job = await Job.create({...req.body })
    res.status(StatusCodes.OK).json({ job })
}

export const updateJob = async(req, res) => {
    const { userID: createdBy } = req
    const { id: _id } = req.params

    const job = await Job.findOneAndUpdate({ createdBy, _id }, req.body)

    if (!job) {
        throw new NotFoundErrorAPI('Can not update a non existant job')
    }
    res.status(StatusCodes.OK).json({ job })
}
export const deleteAllJobs = async(req, res) => {
    const { userID: createdBy } = req
    await Job.deleteMany({ createdBy })
    res.status(StatusCodes.OK).json({ message: 'deleted with succes' })
}
export const deleteJob = async(req, res) => {
    const { userID: createdBy } = req
    const { id: _id } = req.params

    const job = await Job.deleteOne({ createdBy, _id })
    if (!job.deletedCount) {
        throw new NotFoundErrorAPI('Can not delete a non existant job')
    }
    res.status(StatusCodes.OK).json({ message: 'deleted with succes' })
}