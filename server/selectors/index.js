"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//TODO: import { createSelector } from 'reselect'
//import filter from 'lodash/filter'

var categories = function categories(state, user) {
  return state.categories[user.tennant];
};

var equipment = function equipment(state, user) {

  if (user.is.labworker) {
    // return both equipment in kits and not in kits
    return Object.assign({}, state.equipment[user.tennant].inKit, state.equipment[user.tennant].notInKit);
  }
  return state.equipment[user.tennant].notInKit;
};

var kits = function kits(state, user) {
  return state.kits[user.tennant];
};

var reservations = function reservations(state, user) {
  return state.reservations[user.tennant][user.id];
};

var stateSelector = exports.stateSelector = function stateSelector(state, user) {
  return Object.assign({}, {
    categories: categories(state, user),
    equipment: equipment(state, user),
    kits: kits(state, user),
    reservations: reservations(state, user)
  });
};