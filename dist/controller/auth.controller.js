"use strict";

var _userRepository = _interopRequireDefault(require("../models/repository/userRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.createUser = function (req, res, next) {
  var user = req.body;

  _userRepository["default"].create(user).then(function (newUser) {
    res.json(newUser);
  })["catch"](function (error) {
    res.status(422).json({
      error: error
    });
  });
};

exports.login = function (req, res, next) {
  var user = req.body;
  console.log('%s, %s', user.userid, user.password);

  _userRepository["default"].findOne(user.userid).then(function (searchUser) {
    if (searchUser === null) {
      return res.redirect('/auth/login/fail');
    }

    console.log(searchUser);
    req.session.userid = user.userid;
    return res.redirect('/auth/login/success');
  })["catch"](function (error) {
    console.log(error);
    res.redirect('/auth/login/fail');
  });
};

exports.success = function (req, res, next) {
  return res.json({
    message: 'success login'
  });
};

exports.fail = function (req, res, next) {
  return res.json({
    message: 'fail login'
  });
};

exports.logout = function (req, res, next) {
  delete req.session;
  return res.json({
    message: 'success logout'
  });
};