"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _item = _interopRequireDefault(require("./item"));

var router = (0, _express.Router)();
router.use('/item', _item.default);
var _default = router;
exports.default = _default;