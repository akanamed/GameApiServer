import express from 'express';
import authRouter from './auth.route';

const routeHandler = express.Router();

routeHandler.use('/auth', authRouter);

export default routeHandler;
