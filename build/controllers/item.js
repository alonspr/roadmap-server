"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItems = getItems;
exports.createItem = createItem;
exports.modifyItem = modifyItem;
exports.deleteItem = deleteItem;

var _items = _interopRequireDefault(require("../models/items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getItems(_x, _x2) {
  return _getItems.apply(this, arguments);
}

function _getItems() {
  _getItems = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var items;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _items.default.find({});

          case 3:
            items = _context.sent;
            res.send({
              items: items
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(400).send({
              error: _context.t0.message
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  return _getItems.apply(this, arguments);
}

function createItem(_x3, _x4) {
  return _createItem.apply(this, arguments);
}

function _createItem() {
  _createItem = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var item;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _items.default.create(req.body);

          case 3:
            item = _context2.sent;
            res.send({
              item: item
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).send({
              error: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));
  return _createItem.apply(this, arguments);
}

function modifyItem(_x5, _x6) {
  return _modifyItem.apply(this, arguments);
}

function _modifyItem() {
  _modifyItem = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _id, updated;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _id = req.params.id;
            _context3.next = 4;
            return _items.default.findByIdAndUpdate(_id, req.body, {
              new: true,
              // returns the updated object after the request
              runValidators: true // make sure to validate new object by the schema

            });

          case 4:
            updated = _context3.sent;
            res.send({
              updated: updated
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).send({
              error: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 8]]);
  }));
  return _modifyItem.apply(this, arguments);
}

function deleteItem(_x7, _x8) {
  return _deleteItem.apply(this, arguments);
}

function _deleteItem() {
  _deleteItem = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _id, deleted;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _id = req.params.id;
            _context4.next = 4;
            return _items.default.findByIdAndRemove({
              _id: _id
            });

          case 4:
            deleted = _context4.sent;

            if (!(deleted === null)) {
              _context4.next = 7;
              break;
            }

            throw new Error('The selected item does not exists');

          case 7:
            res.send({
              _id: _id
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(400).send({
              error: _context4.t0.message
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 10]]);
  }));
  return _deleteItem.apply(this, arguments);
}