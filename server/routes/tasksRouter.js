import express from 'express';
// import { validateProjectId } from '../middlewares/validateProjectId.js';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';

const tasksRouter = express.Router();

tasksRouter
    .route('/:userId/projects/:projectId/tasks')
    .get(getTasks)
    .post(createTask);

tasksRouter
    .route('/:userId/projects/:projectId/tasks/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask);

export default tasksRouter;