import express from "express";
import cors from "cors";
import {config} from 'dotenv';
import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
config();
const PORT = process.env.PORT || 6061;
app.use(cors({origin: 'http://localhost:6060', credentials: true}));
const mongoURI = process.env.CONNECTION_STRING;

// Routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/users', projectsRouter);
app.use('/api/v1/users', tasksRouter);

mongoose.connect(mongoURI).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`listening to port ${PORT}`);
     });
}).catch((error)=>console.log(error));