const express = require('express');
const Router = express.Router();
const AuthenticationController = require('../Controllers/AuthenticationController');

/*
This route is used for Authentication and it gets a JWT Token as a response.
There is no need to authorize users that are trying to loggin
*/
Router.post('/login', AuthenticationController.Login);
module.exports = Router; 