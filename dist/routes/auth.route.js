"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controller/auth.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authRouter = _express["default"].Router();

authRouter.route('/create').post(_auth["default"].createUser);
authRouter.route('/login').get(_auth["default"].login);
authRouter.route('/login/success').get(_auth["default"].success);
authRouter.route('/login/fail').get(_auth["default"].fail);
authRouter.route('/logout').get(_auth["default"].logout);
var _default = authRouter;
exports["default"] = _default;