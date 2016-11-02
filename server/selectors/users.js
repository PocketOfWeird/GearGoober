'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQuery = exports.getSpecificUser = undefined;

var _helpers = require('../helpers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getSpecificUser = exports.getSpecificUser = function getSpecificUser(userState, id) {

  var index = userState.active.index[id];
  var user = userState.active.data[index];

  if (!user) {
    var inactiveIndex = userState.inactive.index[id];
    if (userState.inactive.data[inactiveIndex]) {
      return user;
    } else {
      return null;
    }
  }
  return user;
};

var userQuery = exports.userQuery = function userQuery(state, user, query) {
  switch (query.type) {
    case 'active':
      if (user.is.admin) return { users: state.active.data };
      return {};
    case 'inactive':
      if (user.is.admin) return { users: state.inactive.data };
      return {};
    case 'active and inactive':
      if (user.is.admin) return { users: [].concat(_toConsumableArray(state.active.data), _toConsumableArray(state.inactive.data)) };
      return {};
    case 'specific':
      if (user.is.admin) {
        userDetails: getSpecificUser(state, query.id);
      }
      return {};
    case 'suggestions':
      if (user.is.labworker) return { userSuggestions: (0, _helpers.suggestionFilter)(state.active.data, query.text.toLowerCase(), 'lowerName') };
      return {};
    default:
      return {};
  }
};