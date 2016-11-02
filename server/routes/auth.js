'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _helpers = require('../helpers');

var _gearGooberConfig = require('../../.config/gearGooberConfig.js');

var _gearGooberConfig2 = _interopRequireDefault(_gearGooberConfig);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bad = function bad(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bad Email or Password';
    return (0, _helpers.handleHttpError)(res, message, 401);
};

var authRoute = function authRoute(store) {
    return function (req, res) {
        try {
            // Validate email and password
            var email = req.body.email;
            var password = req.body.password;
            if (!(0, _isEmail2.default)(email)) return bad(res);
            if (typeof password !== 'string') return bad(res);

            var state = store.getState();
            var dispatch = store.dispatch;

            // Lookup user
            var _state$lookup$users$e = state.lookup.users[email],
                id = _state$lookup$users$e.id,
                tennant = _state$lookup$users$e.tennant;

            if (!id || !tennant) return bad(res);
            var user = (0, _selectors.getSpecificUser)(state.users[tennant], id);
            if (!user) return bad(res);
            if (!user.active) return bad(res, 'Your account has been deactivated');

            // Check password
            if (!(0, _helpers.isSame)(password, user.password)) return bad(res);

            // Make token
            var token = _jsonwebtoken2.default.sign(user, _gearGooberConfig2.default.secret, {
                algorithm: _gearGooberConfig2.default.algorithm,
                expiresIn: 86400 // expires in 24 hours
            });

            dispatch({
                type: 'USER_LOGGED_IN',
                payload: id
            });

            return res.json({ data: [token, user] });
        } catch (e) {
            return (0, _helpers.handleHttpError)(res, e, 500);
        }
    };
};

exports.default = authRoute;