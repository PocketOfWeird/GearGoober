'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _userReducerHelpers = require('./userReducerHelpers');

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.HYDRATE_FROM_SNAPSHOT:
      return action.payload;
    case 'USER_LOGGED_IN':
      return (0, _userReducerHelpers.addLoggedInUser)(state, action);
    default:
      return state;
  }
};

exports.default = reducer;