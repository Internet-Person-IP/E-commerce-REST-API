const express = require('express');
const Router = express.Router();
const usersController = require('../Controllers/UsersController');

/*
This endpoints starts with /products

*/

Router.get('/:id', usersController.getUser);
Router.post('/',usersController.createUser);
Router.put('/:id', usersController.updateUser);
Router.delete('/:id',usersController.deleteUser);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/