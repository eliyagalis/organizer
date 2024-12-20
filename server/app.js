import express from "express";
import cors from "cors";
import {config} from 'dotenv';
import mongoose from "mongoose";

import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
app.use(express.json());
config();
const PORT = process.env.PORT || 6061;
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
const mongoURI = process.env.CONNECTION_STRING;

app.use('/api/v1/users', usersRouter);
app.use('/api/v1', projectsRouter);
app.use('/api/v1', tasksRouter);

mongoose.connect(mongoURI).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`listening to port ${PORT}`);
     });
}).catch((error)=>console.log(error));