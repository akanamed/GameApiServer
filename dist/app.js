"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use('/', _index["default"]); // error handler

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