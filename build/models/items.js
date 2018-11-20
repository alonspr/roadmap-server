"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define schema for a single item
var ItemSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: 2
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    unique: true
  },
  city: {
    type: String
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  brand: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  conversion: {
    type: Boolean
  }
}); // creating collection for items

var _default = _mongoose.default.model('item', ItemSchema);

exports.default = _default;