const express = require('express');
const Router = express.Router();
const cartsController = require('../Controllers/CartsController');
const {JWTAuthentication,grantAccess} = require('../Controllers/AuthenticationController');
/*
This endpoints starts with /Carts
get post put delete own or admin

Carts:
GET: userID=req.body.userID
POST: userID=req.body.userID
PUT: userID=req.params.userID
DELETE: userID=req.params.userID
grantAccess('createOwn','Product','body','CreatorID')
*/

//Router.get('/getall',cartsController.GetAllCartItems);
Router.get('/:userID',JWTAuthentication, grantAccess('readOwn','CartItem','params','userID'), cartsController.GetCartItem);
Router.post('/',JWTAuthentication,grantAccess('createOwn','CartItem','body','userID'),cartsController.AddCartItem);
Router.put('/:userID',JWTAuthentication,grantAccess('updateOwn','CartItem','params','userID'),cartsController.UpdateCartItem);
Router.delete('/:userID',JWTAuthentication,grantAccess('deleteOwn','CartItem','params','userID'),cartsController.DeleteCartItem);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/