import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 6061;
dotenv.config();

// Connect to mongoDB
const mongoURI = process.env.CONNECTION_STRING;

// app.use(cors({origin: 'http://localhost:6060'}));
app.use(cors());

// Routes
app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/tasks', tasksRouter);

mongoose.connect(mongoURI).then(()=>{
    app.listen(PORT, ()=> {
        console.log(`listening to port ${PORT}`);
     });
}).catch((error)=>console.log(error));