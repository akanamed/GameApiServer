"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const express = require('express');

const router = express.Router();
/* GET home page. */

router.get('/', (req, res, next) => {
  res.send({
    title: 'Express'
  });
});
var _default = router;
exports.default = _default;