import express from 'express';
import getProjects from '../controllers/projectsController.js';

const projectsRouter = express.Router();
projectsRouter.route('/getProjects').get(getProjects);

export default projectsRouter