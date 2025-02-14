import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';
import { validateTask } from '../middlewares/taskValidations.js';
const tasksRouter = express.Router();
    
tasksRouter.get('/project/:projectId', getTasks);
tasksRouter.get('/:taskId',getTaskById);
tasksRouter.post('/', validateTask, createTask);
tasksRouter.put('/:taskId', validateTask, updateTask);
tasksRouter.delete('/:taskId', deleteTask);

export default tasksRouter;