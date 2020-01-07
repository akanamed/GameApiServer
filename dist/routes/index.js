"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routeHandler = _express["default"].Router();

routeHandler.use('/auth', _auth["default"]);
var _default = routeHandler;
exports["default"] = _default;