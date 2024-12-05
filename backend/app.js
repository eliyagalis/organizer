import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6061;
// app.use(cors({origin: 'http://localhost:6060'}));

app.use(express.json());
// app.use(cors());

app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/tasks', tasksRouter);

app.listen(PORT, ()=>{
    console.log(`listening to Port ${PORT}`);
});