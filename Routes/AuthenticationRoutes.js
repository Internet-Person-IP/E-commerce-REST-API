const express = require('express');
const Router = express.Router();
const AuthenticationController = require('../Controllers/AuthenticationController');


Router.post('/login', AuthenticationController.Login);
Router.get('/JWTAuthentication',AuthenticationController.JWTAuthentication);
module.exports = Router; 