'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestionFilter = undefined;

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestionFilter = exports.suggestionFilter = function suggestionFilter(state, text, property) {
  return (0, _map2.default)(state, function (object) {
    if (object[property].includes(text)) {
      return { text: object[property], value: object.id };
    }
  });
};