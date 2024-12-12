import {Router} from 'express';
import { 
    createProject, 
    deleteProject, 
    getProjectById, 
    getProjects, 
    updateProject } from '../controllers/projectsController.js';

const projectsRouter = Router();

projectsRouter
    .route('/')
    .get(getProjects)
    .post(createProject);

projectsRouter
    .route('/:id')
    .get(getProjectById)
    .put(updateProject)
    .delete(deleteProject);

export default projectsRouter