const express = require('express');
const Router = express.Router();
const usersController = require('../Controllers/UsersController');
const {JWTAuthentication,grantAccess} = require('../Controllers/AuthenticationController');
/*
This endpoints starts with /products

*/

Router.get('/:id',JWTAuthentication,grantAccess('readOwn','User'), usersController.getUser);
Router.post('/',usersController.createUser);
Router.put('/:id',JWTAuthentication,grantAccess('updateOwn','User'), usersController.updateUser);
Router.delete('/:id',JWTAuthentication,grantAccess('updateOwn','User'),usersController.deleteUser);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/