import express from 'express';
import authController from '../controller/auth.controller';

const authRouter = express.Router();

authRouter.route('/create')
    .post(authController.createUser);

export default authRouter;
