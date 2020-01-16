import express from 'express';
import authController from '../controller/v2/auth.controller.v2';

const authRouter = express.Router();

function ensureAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(403).json({ message: 'need login session' });
    } else {
        next();
    }
}

authRouter.route('/create')
    .post(authController.createUser);
authRouter.route('/login')
    .get(authController.login);
authRouter.route('/logininfo')
    .get(ensureAuthenticated, authController.loginInfo);
authRouter.route('/login/success')
    .get(authController.success);
authRouter.route('/login/fail')
    .get(authController.fail);
authRouter.route('/logout')
    .get(authController.logout);

export default authRouter;
