"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controller/auth.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authRouter = _express.default.Router();

authRouter.route('/create').post(_auth.default.createUser);
var _default = authRouter;
exports.default = _default;