'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSpecificEquipByIndex = function getSpecificEquipByIndex(state, user, index, lookupValue) {
  return state.equipment[user.tennant].inKit.data[state.equipment[user.tennant].inKit[index][lookupValue]] || state.equipment[user.tennant].notInKit.data[state.equipment[user.tennant].notInKit[index][lookupValue]];
};

var getSpecificEquipOrKit = exports.getSpecificEquipOrKit = function getSpecificEquipOrKit(state, user, id) {
  return getSpecificEquipByIndex(state, user, 'index', id) || state.kits[user.tennant].data[state.kits[user.tennant].index[id]];
};

var getSpecificEquipByBarcode = exports.getSpecificEquipByBarcode = function getSpecificEquipByBarcode(state, user, barcode) {
  return getSpecificEquipByIndex(state, user, 'barcodeIndex', barcode);
};