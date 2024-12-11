import express from 'express';
import { validateProjectId } from '../middlewares/validateProjectId.js';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';

const tasksRouter = express.Router();

tasksRouter
    .route('/:projectId/tasks')
    .get(validateProjectId, getTasks)
    .post(validateProjectId, createTask);

tasksRouter
    .route('/:projectId/tasks/:taskId')
    .get(validateProjectId, getTaskById)
    .put(validateProjectId, updateTask)
    .delete(validateProjectId, deleteTask);

export default tasksRouter;