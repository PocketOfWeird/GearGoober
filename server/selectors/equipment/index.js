'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _specific = require('./specific');

var _all = require('./all');

var _helpers = require('../../helpers');

console.log('suggestionFilter', _helpers.suggestionFilter);
var equipmentQuery = function equipmentQuery(state, user, query) {
  switch (query.type) {
    case 'specfic':
      return { equipmentDetails: (0, _specific.getSpecificEquipOrKit)(state, user, query.id) };
    case 'specific by barcode':
      return { equipmentDetails: (0, _specific.getSpecificEquipByBarcode)(state, user, query.barcode) };
    case 'suggestions':
      return { equipmentSuggestions: (0, _helpers.suggestionFilter)((0, _all.getAllEquipAndKits)(state, user), query.text.toLowerCase(), 'lowerName') };
    default:
      return {};
  }
};
exports.default = equipmentQuery;