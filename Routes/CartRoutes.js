const express = require('express');
const Router = express.Router();
const cartsController = require('../Controllers/CartsController');
const {JWTAuthentication,grantAccess} = require('../Controllers/AuthenticationController');

/*
In all routes we check if the user has a JWT Token 
since only people that are authenticated should access these routes.
We only need to check if the userID of the token matches the userID of the request
therefore we use grantAccess here.


*/
Router.get('/:userID',JWTAuthentication, grantAccess('readOwn','CartItem','params','userID'), cartsController.GetCartItem);
Router.post('/',JWTAuthentication,grantAccess('createOwn','CartItem','body','userID'),cartsController.AddCartItem);
Router.put('/:userID',JWTAuthentication,grantAccess('updateOwn','CartItem','params','userID'),cartsController.UpdateCartItem);
Router.delete('/:userID',JWTAuthentication,grantAccess('deleteOwn','CartItem','params','userID'),cartsController.DeleteCartItem);
module.exports = Router; 
