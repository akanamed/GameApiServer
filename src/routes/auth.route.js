import express from 'express';
import authController from '../controller/auth.controller';

const authRouter = express.Router();

authRouter.route('/create')
    .post(authController.createUser);
authRouter.route('/login')
    .post(authController.login);
authRouter.route('/login/success')
    .get(authController.success);
authRouter.route('/login/fail')
    .get(authController.fail);

export default authRouter;
