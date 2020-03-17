const express = require('express');
const Router = express.Router();
const cartsController = require('../Controllers/CartsController');

/*
This endpoints starts with /Carts

*/

Router.get('/getall',cartsController.GetAllCartItems);
Router.get('/:id', cartsController.GetCartItem);
Router.post('/',cartsController.AddCartItem);
Router.put('/:id', cartsController.UpdateCartItem);
Router.delete('/:id',cartsController.DeleteCartItem);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/