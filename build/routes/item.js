"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _item = require("../controllers/item");

/**
 * API Route endpoint: http://localhost:5000/api/item/
 */
var router = (0, _express.Router)(); // rest api endpoints

router.get('/', _item.getItems);
router.post('/', _item.createItem);
router.put('/:id', _item.modifyItem);
router.delete('/:id', _item.deleteItem);
var _default = router;
exports.default = _default;