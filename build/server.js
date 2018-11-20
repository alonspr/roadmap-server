"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _auth = require("./middleware/auth");

var _error = require("./middleware/error");

var app = (0, _express.default)();
var port = process.env.PORT || 5000; // connect to mongodb

_mongoose.default.connect('mongodb://localhost/clients', {
  /* remove deprecation warning */
  useNewUrlParser: true,
  useCreateIndex: true
});

_mongoose.default.Promise = global.Promise; // using api logger

app.use((0, _morgan.default)('tiny')); // using core middlewares

app.use(_bodyParser.default.json());
app.use((0, _cors.default)()); // using the api routes

app.use('/api', _auth.auth, _routes.default); // not found error middlewares

app.use(_error.notFound);
app.use(_error.serverError); // listening to our server

app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});