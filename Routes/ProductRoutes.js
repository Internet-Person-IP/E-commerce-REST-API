const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/ProductsController');

/*
This endpoints starts with /products

*/

Router.get('/getall',productsController.getAllProducts);
Router.get('/:id', productsController.getProduct);
Router.post('/',productsController.createProduct);
Router.put('/:id', productsController.updateProduct);
Router.delete('/:id',productsController.deleteProduct);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/