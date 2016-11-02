'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getSpecificEquipOrKit = function getSpecificEquipOrKit(state, user, id) {
  var inKitIndex = state.equipment[user.tennant].inKit.index[id];
  if (!inKitIndex) {
    var notInKitIndex = state.equipment[user.tennant].notInKit.index[id];
    if (!notInKitIndex) {
      var kitIndex = state.kits[user.tennant].index[id];
      if (!kitIndex) return {};
      return state.kits[user.tennant].data[kitIndex];
    }
    return state.equipment[user.tennant].notInKit.data[notInKitIndex];
  }
  return state.equipment[user.tennant].inKit.data[inKitIndex];
};

var getSpecificEquipByBarcode = function getSpecificEquipByBarcode(state, user, barcode) {
  var inKitIndex = state.equipment[user.tennant].inKit.barcodeIndex[barcode];
  return state.equipment[user.tennant].inKit.data[inKitIndex];
};

var getAllEquipAndKits = function getAllEquipAndKits(state, user) {
  return user.is.labworker ? [].concat(_toConsumableArray(state.equipment[user.tennant].inKit.data), _toConsumableArray(state.equipment[user.tennant].notInKit.data), _toConsumableArray(state.kits[user.tennant].data)) : [].concat(_toConsumableArray(state.equipment[user.tennant].notInKit.data), _toConsumableArray(state.kits[user.tennant].data));
};

var equipmentQuery = function equipmentQuery(state, user, query) {
  switch (query.type) {
    case 'specfic':
      return { equipmentDetails: getSpecificEquipOrKit(state, user, query.id) };
    case 'specific by barcode':
    case 'suggestions':
      return { equipmentSuggestions: (0, _helpers2.default)(getAllEquipAndKits(state, user), query.text.toLowerCase(), 'lowerName') };
    default:
      return {};
  }
};
exports.default = equipmentQuery;