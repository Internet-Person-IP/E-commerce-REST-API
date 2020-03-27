const express = require('express');
const Router = express.Router();
const cartsController = require('../Controllers/CartsController');

/*
This endpoints starts with /Carts

*/

//Router.get('/getall',cartsController.GetAllCartItems);

Router.get('/:userID', cartsController.GetCartItem);
Router.post('/',cartsController.AddCartItem);
Router.put('/:userID', cartsController.UpdateCartItem);
Router.delete('/:userID',cartsController.DeleteCartItem);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/