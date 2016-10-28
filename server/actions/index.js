'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HYDRATE_FROM_SNAPSHOT = exports.HYDRATE_FROM_SNAPSHOT = 'HYDRATE_FROM_SNAPSHOT';

var hydrateFromSnapshot = exports.hydrateFromSnapshot = function hydrateFromSnapshot(snapshot) {
  return {
    type: HYDRATE_FROM_SNAPSHOT,
    payload: snapshot
  };
};