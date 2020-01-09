import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// import session from 'express-session';
import { mongoStore, session } from './db/mongo.session';
import mongodb from './db/mongo.connect';
import indexRouter from './routes';

const app = express();
mongodb();
app.use(session({
    secret: process.env.SECRET_KEY,
    cookie: {
        maxAge: 1000 * 60
    },
    store: mongoStore,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
// error handler
app.use((req, res, next) => {
    const err = new Error('Sorry cant find that!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
