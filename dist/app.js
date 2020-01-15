"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongo = require("./db/mongo.session");

var _mongo2 = _interopRequireDefault(require("./db/mongo.connect"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import session from 'express-session';
var app = (0, _express["default"])();
(0, _mongo2["default"])();
app.use((0, _mongo.session)({
  secret: process.env.SECRET_KEY,
  cookie: {
    maxAge: 1000 * 60
  },
  store: _mongo.mongoStore,
  resave: false,
  saveUninitialized: false,
  unset: 'destroy'
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use('/', _routes["default"]); // error handler

app.use(function (req, res, next) {
  var err = new Error('Sorry cant find that!');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500);
  res.send(err.message);
});
module.exports = app;