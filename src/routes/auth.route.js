import express from 'express';
import authController from '../controller/auth.controller';

const authRouter = express.Router();

authRouter.route('/create')
    .post(authController.createUser);
authRouter.route('/login')
    .get(authController.login);
authRouter.route('/login/success')
    .get(authController.success);
authRouter.route('/login/fail')
    .get(authController.fail);
authRouter.route('/logout')
    .get(authController.logout);

export default authRouter;
