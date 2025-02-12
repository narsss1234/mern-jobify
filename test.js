// import express from 'express';
// import morgan from 'morgan';
// import * as dotenv from 'dotenv';

// // dotenv.config();

// const app = express();
// var port;

// if(process.env.PORT){
// port = process.env.PORT;
//  } else {
// port = 5000;
// }

// app.get("/", (req, res, next) => {
//     res.send('Hello World!');
// });

// app.use(morgan('dev'));

// app.use(express.json());

// app.post("/", (req, res, next) => {
//     const jsonObject_1 = req.body;

//     console.log(jsonObject_1);
//     res.status(200).json({message: 'Data Received', data: req.body});
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });