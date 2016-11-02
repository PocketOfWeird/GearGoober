'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateSelector = exports.getSpecificUser = undefined;

var _users = require('./users');

Object.defineProperty(exports, 'getSpecificUser', {
  enumerable: true,
  get: function get() {
    return _users.getSpecificUser;
  }
});

var _users2 = _interopRequireDefault(_users);

var _equipment = require('./equipment');

var _equipment2 = _interopRequireDefault(_equipment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateSelector = exports.stateSelector = function stateSelector(state, _ref) {
  var user = _ref.user,
      substate = _ref.substate,
      query = _ref.query;

  switch (substate) {
    case 'tennants':
      return { tennant: state.tennants[user.tennant] };
    case 'users':
      return (0, _users2.default)(state.users[user.tennant], user, query);
    case 'equipment':
      return (0, _equipment2.default)(state, user, query);
    default:
      return {};
  }
};