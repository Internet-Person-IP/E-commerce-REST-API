const express = require('express');
const Router = express.Router();
const ordersController = require('../Controllers/OrdersController');

/*
This endpoints starts with /orders'
*/

//Router.get('/getall',cartsController.GetAllCartItems);
Router.get('/getall/:userID', ordersController.getAllOrders);
Router.get('/:orderID', ordersController.getOrder);
Router.post('/',ordersController.createOrder);
//Router.delete('/:orderID',ordersController.deleteOrder);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/