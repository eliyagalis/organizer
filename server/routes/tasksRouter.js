import express from 'express';
import { getTasks, getTask, createTask, deleteTask } from '../controllers/tasksController.js';

const tasksRouter = express.Router();

// Route to get all tasks
tasksRouter.get('/', getTasks);

// Route to get a specific task by ID
tasksRouter.get('/:id', getTask);

// Route to add a task
tasksRouter.post('/', createTask);

// Route to delete a task
tasksRouter.delete('/', deleteTask);

export default tasksRouter;