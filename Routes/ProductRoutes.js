const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/ProductsController');



Router.get('/getall',productsController.getAllProducts);
Router.get('/:id', productsController.getProduct);
Router.post('/',productsController.createProduct);
module.exports = Router; 