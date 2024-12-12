import {Router} from 'express';

const usersRouter = Router();

usersRouter.route('/')
    .get()
    .post();

usersRouter.route('/:id')
    .get()
    .put()
    .delete();

export default usersRouter;