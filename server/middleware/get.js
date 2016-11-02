'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../index');

var _selectors = require('../selectors');

var socketGetMiddleware = function socketGetMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type && action.type === 'CLIENT_GET') {
        _index.io.emit('SERVER_STATE', (0, _selectors.stateSelector)(store.getState(), action.meta));
      }

      return next(action);
    };
  };
};
exports.default = socketGetMiddleware;