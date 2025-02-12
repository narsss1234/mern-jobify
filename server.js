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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});