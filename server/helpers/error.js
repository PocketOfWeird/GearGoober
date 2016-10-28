'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var handleHttpError = exports.handleHttpError = function handleHttpError(res, error, status) {
  return res.status(status).json({
    success: false, message: 'Error: ' + error
  });
};