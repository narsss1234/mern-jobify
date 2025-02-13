import express from 'express';
import { nanoid } from 'nanoid';
// import * as dotenv from 'dotenv/config';
// dotenv.config();
import morgan from 'morgan';


const app = express();
const port = 5000;

let jobs = [
    {id: nanoid(), company: 'apple', position: 'front-end'},
    {id: nanoid(), company: 'google', position: 'back-end'},
];

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({jobs});
});

app.post('/api/v1/jobs', (req, res) => {
    // console.log(req.body);
    const { company, position } = req.body;

    if(!company || !position) {
        return res.status(400).json({message: 'Please provide company and position'});
    }

    const id = nanoid(10);

    const newJob = {id, company, position};

    jobs.push(newJob);

    res.status(200).json({message: 'new jobs added', job: newJob});
});

app.get('/api/v1/jobs/:id', (req, res) => {
    const {id} = req.params;

    const job = jobs.find(p => p.id === id);

    if(!job){
        return(res.status(400).json({message: `Job not found with job id: ${id}`}));
    }

    res.status(200).json({job});

});

app.patch('/api/v1/jobs/:id', (req, res) => {
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
});

app.delete('/api/v1/jobs/:id', (req, res) => {
    let newJobsList = [];
    const {id} = req.params;

    const job = jobs.find(p => p.id === id);

    if(!job){
        return(res.status(400).json({message: `Job not found with job id: ${id}`}));
    }

    newJobsList = jobs.filter(p => p.id !== id);

    res.status(200).json({message: 'Job deleted', job: newJobsList});
});

app.use('*', (req,res) => {
    res.status(404).json({message: 'Route not found'});
});

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).json({message: 'Something went wrong'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});