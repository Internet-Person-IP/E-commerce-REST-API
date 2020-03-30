const express = require('express');
const Router = express.Router();
const ordersController = require('../Controllers/OrdersController');
const {JWTAuthentication, grantAccess, grantAccessViaDB} = require('../Controllers/AuthenticationController');
/*
This endpoints starts with /orders'

get get post own or admin

GET: all req.params.id=token.id
GET: 1 SELECT userId FROM Order WHERE id=13213
POST: userID=req.body.userID
TODO: Deletes and Another Middleware for authenticating if it is there orderID

*/
//Router.get('/getall',cartsController.GetAllCartItems);
Router.get('/getall/:userID', JWTAuthentication,grantAccess('readOwn','Order','params','userID'), ordersController.getAllOrders);
Router.get('/:orderID',JWTAuthentication,grantAccessViaDB('readOwn','Order','params','orderID','userId','Orders','Id'), ordersController.getOrder);
Router.post('/',JWTAuthentication,grantAccess('createOwn','Order','body','userID'),ordersController.createOrder);
//Router.delete('/:orderID',JWTAuthentication,grantAccess('deleteAny','Order'),ordersController.deleteOrder);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/