import express from 'express';
import getTasks from '../controllers/tasksController.js';

const tasksRouter = express.Router();
tasksRouter.route('/').get(getTasks);

export default tasksRouter