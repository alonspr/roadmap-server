"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = auth;

// auth jwt middleware
function auth(req, res, next) {
  // TODO: check user auth (auto0)
  // if (!user) {
  //     return res.status(401).send({ error: 'Access Denied' });
  // }
  next();
}