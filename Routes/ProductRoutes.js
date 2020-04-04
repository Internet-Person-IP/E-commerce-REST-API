const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/ProductsController');
const {JWTAuthentication,grantAccess,grantAccessViaDB} = require('../Controllers/AuthenticationController');

/*
In all routes we check if the user has a JWT Token 
since only people that are authenticated should access these routes.
We only need to check if the userID of the token matches the userID of the request
therefore we use grantAccess here.

We also use grantAccessViaDB since a DB check is needed to know the userID of a resource.

*/

 

Router.get('/getall',productsController.getAllProducts);
Router.get('/:id', productsController.getProduct);
Router.post('/',JWTAuthentication,grantAccess('createOwn','Product','body','CreatorID'), productsController.createProduct);
Router.put('/:id',JWTAuthentication,grantAccessViaDB('updateOwn','Product','params','id','creatorID','Product','Id'), productsController.updateProduct);
Router.delete('/:id',JWTAuthentication,grantAccessViaDB('deleteOwn','Product','params','id','creatorID','Product','Id'), productsController.deleteProduct);
module.exports = Router; 

