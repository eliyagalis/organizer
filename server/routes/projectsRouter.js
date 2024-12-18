import {Router} from 'express';
import { 
    createProject, 
    deleteProject, 
    getProjectById, 
    getProjects, 
    updateProject } from '../controllers/projectsController.js';

const projectsRouter = Router();

projectsRouter
    .route('/users/:userId/projects')
    .get(getProjects)
    .post(createProject);

projectsRouter
    .route('/projects/:projectId')
    .get(getProjectById)
    .put(updateProject)
    .delete(deleteProject);

export default projectsRouter