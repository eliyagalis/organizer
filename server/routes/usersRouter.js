import {Router} from 'express';
import { getUsers, getUserById, signup, login, deleteUser, updateUser } from '../controllers/usersController';

const usersRouter = Router();

usersRouter.route('/')
    .get(getUsers)
    .post(signup)
    .post(login);

usersRouter.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default usersRouter;