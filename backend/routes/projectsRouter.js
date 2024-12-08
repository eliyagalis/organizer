import express from 'express';
import { getProjects } from '../controllers/projectsController.js';

const projectsRouter = express.Router();

projectsRouter.get('/', getProjects);


export default projectsRouter