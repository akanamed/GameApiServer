"use strict";

exports.createUser = (req, res, next) => {
  // if (req.body.userid === undefined) {
  //     return next();
  // }
  const {
    userid
  } = req.body;
  const {
    password
  } = req.body;
  return res.json({
    message: 'success'
  });
};