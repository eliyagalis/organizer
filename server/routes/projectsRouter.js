import {Router} from 'express';
import { createProject, deleteProject, getProjectById, 
    getProjects, updateProject } from '../controllers/projectsController.js';
import { validateProject } from '../middlewares/projectValidation.js';

const projectsRouter = Router();

projectsRouter.get('/user/:userId', getProjects);
projectsRouter.get('/:projectId', getProjectById);
projectsRouter.post('/', validateProject, createProject);
projectsRouter.put('/:projectId', validateProject, updateProject);
projectsRouter.delete('/:projectId', deleteProject);

export default projectsRouter