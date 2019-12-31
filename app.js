const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');

const app = express();

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
