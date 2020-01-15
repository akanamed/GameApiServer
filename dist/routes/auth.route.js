"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = _interopRequireDefault(require("../controller/v2/auth.controller.v2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authRouter = _express["default"].Router();

authRouter.route('/create').post(_authController["default"].createUser);
authRouter.route('/login').get(_authController["default"].login);
authRouter.route('/login/success').get(_authController["default"].success);
authRouter.route('/login/fail').get(_authController["default"].fail);
authRouter.route('/logout').get(_authController["default"].logout);
var _default = authRouter;
exports["default"] = _default;