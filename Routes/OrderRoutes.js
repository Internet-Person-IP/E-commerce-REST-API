const express = require('express');
const Router = express.Router();
const ordersController = require('../Controllers/OrdersController');

/*
This endpoints starts with /Carts

*/

//Router.get('/getall',cartsController.GetAllCartItems);
Router.get('/:userID', ordersController);
Router.get('/:userID/:orderID', ordersController);
Router.post('/',ordersController);
Router.delete('/:userID/:orderID',ordersController);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/