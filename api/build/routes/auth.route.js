'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../controllers/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRouter = _express2.default.Router();
authRouter.post('/login', _auth2.default.login);
authRouter.post('/register', function (req, res) {
  return res.send({});
});
module.exports = authRouter;