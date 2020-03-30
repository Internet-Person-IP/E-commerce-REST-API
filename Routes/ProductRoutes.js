const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/ProductsController');
const {JWTAuthentication,grantAccess,grantAccessViaDB} = require('../Controllers/AuthenticationController');
/*
This endpoints starts with /products

Here We Need a couple of routes
Post Anyone that is authenticated
Put Delete own or admin

Products:
PUT : SELECT CreatorID FROM Product WHERE Id=req.params.id;
DELETE : SELECT CreatorID FROM Product WHERE Id=req.params.id;
Column,Table,FilterName,FilterValue
*/

Router.get('/getall',productsController.getAllProducts);
Router.get('/:id', productsController.getProduct);
Router.post('/',JWTAuthentication,grantAccess('createOwn','Product','body','CreatorID'), productsController.createProduct);
Router.put('/:id',JWTAuthentication,grantAccessViaDB('updateOwn','Product','params','id','creatorID','Product','Id'), productsController.updateProduct);
Router.delete('/:id',JWTAuthentication,grantAccessViaDB('deleteOwn','Product','params','id','creatorID','Product','Id'), productsController.deleteProduct);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/