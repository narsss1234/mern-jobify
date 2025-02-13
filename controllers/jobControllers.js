import { nanoid } from 'nanoid';

let jobs = [
    {id: nanoid(), company: 'apple', position: 'front-end'},
    {id: nanoid(), company: 'google', position: 'back-end'},
];

export const getAllJobs = (req, res) => {
    res.status(200).json({jobs});
}

export const createJob = (req, res) => {
    // console.log(req.body);
    const { company, position } = req.body;

    if(!company || !position) {
        return res.status(400).json({message: 'Please provide company and position'});
    }

    const id = nanoid(10);

    const newJob = {id, company, position};

    jobs.push(newJob);

    res.status(200).json({message: 'new jobs added', job: newJob});
}

export const getJobById = (req, res) => {
    const {id} = req.params;

    const job = jobs.find(p => p.id === id);

    if(!job){
        return(res.status(400).json({message: `Job not found with job id: ${id}`}));
    }

    res.status(200).json({job});

}

export const updateJob = (req, res) => {
    const { id } = req.params;

    const { company, position } = req.body;

    const job = jobs.find(p => p.id === id);

    if(!job){
        return res.status(400).json({message: `Job not found with job id: ${id}`});
    }

    if(!company || !position){
        return res.status(400).json({message: 'Please provide company and position'});
    }

    job.company = company;
    job.position = position;

    res.status(200).json({message: 'Job updated', job});
}

export const deleteJob = (req, res) => {
    let newJobsList = [];
    const {id} = req.params;

    const job = jobs.find(p => p.id === id);

    if(!job){
        return(res.status(400).json({message: `Job not found with job id: ${id}`}));
    }

    newJobsList = jobs.filter(p => p.id !== id);

    res.status(200).json({message: 'Job deleted', job: newJobsList});
}