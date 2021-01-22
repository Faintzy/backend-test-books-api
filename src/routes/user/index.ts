import { Router, Request, Response } from 'express';
import { authUser, createUser, logout } from '../../controllers/UserController';

const userRouter = Router();

userRouter.post('/auth', authUser);
userRouter.put('/user/create', createUser);
userRouter.post('/user/logout', logout);

export default userRouter;