import express from 'express';
import { getProjects } from '../controllers/projectsController.js';

const projectsRouter = express.Router();

projectsRouter.route('/').get(getProjects).post().put().delete();



export default projectsRouter