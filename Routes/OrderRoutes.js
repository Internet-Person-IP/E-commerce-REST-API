const express = require('express');
const Router = express.Router();
const ordersController = require('../Controllers/OrdersController');
const {JWTAuthentication, grantAccess, grantAccessViaDB} = require('../Controllers/AuthenticationController');
/*
In all routes we check if the user has a JWT Token 
since only people that are authenticated should access these routes.
We only need to check if the userID of the token matches the userID of the request
therefore we use grantAccess here.

We also use grantAccessViaDB since a DB check is needed to know the userID of a resource.

*/

Router.get('/getall/:userID', JWTAuthentication,grantAccess('readOwn','Order','params','userID'), ordersController.getAllOrders);
Router.get('/:orderID',JWTAuthentication,grantAccessViaDB('readOwn','Order','params','orderID','userId','Orders','Id'), ordersController.getOrder);
Router.post('/',JWTAuthentication,grantAccess('createOwn','Order','body','userID'),ordersController.createOrder);

module.exports = Router; 
