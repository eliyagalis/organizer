import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';

const tasksRouter = express.Router();
    
tasksRouter.get('/projects/:projectId', getTasks);
tasksRouter.post('/', createTask);
tasksRouter.get('/:taskId',getTaskById);
tasksRouter.put('/:taskId', updateTask);
tasksRouter.delete('/:taskId', deleteTask);

export default tasksRouter;