'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var bad = function bad(res) {
  return (0, _helpers.handleHttpError)(res, 'Invalid request', 400);
};

var dataRoute = function dataRoute(store) {
  return function (req, res) {
    try {
      // TODO: validate action object
      if (!req.body.action) return bad(res);
      var action = req.body.action;
      action.meta.user = req.decoded;
      store.dispatch(req.body.action);
      return res.json({ data: { success: true } });
    } catch (e) {
      console.log('/data request error', e);
      return (0, _helpers.handleHttpError)(res, e, 500);
    }
  };
};

exports.default = dataRoute;