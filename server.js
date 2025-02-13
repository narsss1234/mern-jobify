import express from 'express';
// import * as dotenv from 'dotenv/config';
// dotenv.config();
import morgan from 'morgan';
import mongoose from 'mongoose';
import 'express-async-errors';

import jobRouter from './Routes/jobRouter.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();
const port = 5000;

const mongo_url = 'mongodb+srv://jobify:jobify1234@cluster0.0b4vnjq.mongodb.net/JOBIFY?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/jobs' ,jobRouter);

app.use('*', (req,res) => {
    res.status(404).json({message: 'Route not found'});
});

app.use(errorHandlerMiddleware);


try{
    await mongoose.connect(mongo_url);
    console.log('Connected to database');
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}   catch(error) {
    console.log('Error connecting to database');
    throw error;
}