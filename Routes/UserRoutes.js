const express = require('express');
const Router = express.Router();
const usersController = require('../Controllers/UsersController');
const {JWTAuthentication,grantAccess} = require('../Controllers/AuthenticationController');

/*
In all routes we check if the user has a JWT Token 
since only people that are authenticated should access these routes.
We only need to check if the userID of the token matches the userID of the request
therefore we use grantAccess here.
*/

Router.get('/:id',JWTAuthentication,grantAccess('readOwn','User'), usersController.getUser);
Router.post('/',usersController.createUser);
Router.put('/:id',JWTAuthentication,grantAccess('updateOwn','User'), usersController.updateUser);
Router.delete('/:id',JWTAuthentication,grantAccess('updateOwn','User'),usersController.deleteUser);
module.exports = Router; 
