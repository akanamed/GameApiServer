var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// error handler
app.use(function(req, res, next) {
    var err = new Error('Sorry cant find that!');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
