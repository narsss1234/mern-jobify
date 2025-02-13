import express from 'express';
// import * as dotenv from 'dotenv/config';
// dotenv.config();
import morgan from 'morgan';

import jobRouter from './Routes/jobRouter.js';

const app = express();
const port = 5000;



app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/jobs' ,jobRouter);

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