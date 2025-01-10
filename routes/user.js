import express from 'express';
import { CreateUser, LoginUser } from '../controller/user.js';

const userRouter = express.Router();

userRouter.post('/register', CreateUser);
userRouter.post('/login', LoginUser);

export default userRouter;