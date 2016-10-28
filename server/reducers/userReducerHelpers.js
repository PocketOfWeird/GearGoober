"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addLoggedInUser = exports.addLoggedInUser = function addLoggedInUser(state, action) {
  return Object.assign({}, state, {
    loggedInUsers: Object.assign({}, state.loggedInUsers, _defineProperty({}, action.payload, true))
  });
};