'use strict';

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _helpers = require('./helpers');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import undb from './undb'

var store = (0, _configureStore2.default)();

//store.subscribe(() => console.log(store.getState())) // eslint-disable-line no-console

store.dispatch((0, _actions.hydrateFromSnapshot)(_helpers.mockSnapshop));

(0, _helpers.startServer)(store);