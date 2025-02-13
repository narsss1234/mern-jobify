import { nanoid } from 'nanoid';

let jobs = [
    {id: nanoid(), company: 'apple', position: 'front-end'},
    {id: nanoid(), company: 'google', position: 'back-end'},
];

import Job from '../models/jobModel.js';

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(200).json({jobs});
}

export const createJob = async (req, res) => {

    const job = await Job.create(req.body);

    res.status(200).json({message: 'new job is added', job: job});
}

export const getJobById = async (req, res) => {
    const {id} = req.params;

    const job = await Job.findById(id);

    if(!job){
        return(res.status(404).json({message: `Job not found with job id: ${id}`}));
    }

    res.status(200).json({job});

}

export const updateJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {new: true});

    if(!updatedJob){
        return res.status(404).json({message: `Job not found with job id: ${id}`});
    }

    res.status(200).json({message: 'Job updated', updatedJob});
}

export const deleteJob = async (req, res) => {
    let newJobsList = [];
    const {id} = req.params;

    const removedJob = await Job.findByIdAndDelete(id);

    if(!removedJob){
        return(res.status(404).json({message: `Job not found with job id: ${id}`}));
    }

    res.status(200).json({message: 'Job deleted', job: removedJob});
}