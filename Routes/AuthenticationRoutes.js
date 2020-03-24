const express = require('express');
const Router = express.Router();
const AuthenticationController = require('../Controllers/AuthenticationController');


Router.post('/login', AuthenticationController.AuthenticateUser);
module.exports = Router; 