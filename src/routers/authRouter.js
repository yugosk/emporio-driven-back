import { loginUser, createUser } from '../controllers/userController.js';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', loginUser);
authRouter.post('/cadastrar', createUser);


export default authRouter;
