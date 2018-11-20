"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = notFound;
exports.serverError = serverError;

// the specific route was not found
function notFound(req, res, next) {
  var err = new Error("Not Found: ".concat(req.path));
  err.status = 404;
  next(err);
} // error response


function serverError(err, req, res) {
  console.log('error', err.message);
  res.status(err.status);
  res.json({
    error: err.message
  });
}