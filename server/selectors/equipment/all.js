"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getAllEquipAndKits = exports.getAllEquipAndKits = function getAllEquipAndKits(state, user) {
  return user.is.labworker ? [].concat(_toConsumableArray(state.equipment[user.tennant].inKit.data), _toConsumableArray(state.equipment[user.tennant].notInKit.data), _toConsumableArray(state.kits[user.tennant].data)) : [].concat(_toConsumableArray(state.equipment[user.tennant].notInKit.data), _toConsumableArray(state.kits[user.tennant].data));
};