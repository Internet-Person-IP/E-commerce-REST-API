const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/ProductsController');

/*
This endpoints starts with /products
*/
/**  
 *@swagger
 /products/getall:
 *    get:
 *      description: Returns all the  products
 *      
 *      responses:
 *        '200':
 *          description: Successfully returned all the products
 *        '404':
 *          description: Failed to retrieve all the products
 
 /products/{ProductId}:
 *    get:
 *      description: Returns the  product details for that specific product id
 *      parameters: 
 *       - name: ProductId
 *         in: path
 *         description: ID of the Product
 *         required: true
 *      
 *      responses:
 *        '200':
 *          description: Successfully returned the products
 *        '404':
 *          description: Failed to retrieve the products
 *    put:
 *      description: Use to insert a new  product
 *      parameters:
 *        - name: ProductName
 *          in: body
 *          description: Name of the Product
 *          required: true
 *          schema:
 *            type: string
 *            format: string
 *        - name: PictureURL
 *          in: body
 *          description: Picture URL of the Product
 *          required: true
 *          schema:
 *            type: string
 *            format: string
 *        - name: Description
 *          in: body
 *          description: Description of the Product
 *          required: true
 *          schema:
 *            type: string
 *            format: string
 *        - name: UserID
 *          in: body
 *          description: User who creates the Product to sell
 *          required: true
 *          schema:
 *            type: integer
 *            format: integer
 *        - name: Price
 *          in: body
 *          description: Price of the Product
 *          required: true
 *          schema:
 *            type: integer
 *            format: integer 
 *   
 *      responses:
 *        '200':
 *          description: Successfully inserted a product
 *        '401':
 *          description: Failed to insert a product 
 */
 

Router.get('/getall',productsController.getAllProducts);
Router.get('/:id', productsController.getProduct);
Router.post('/',productsController.createProduct);
Router.put('/:id', productsController.updateProduct);
Router.delete('/:id',productsController.deleteProduct);
module.exports = Router; 

//https://hub.packtpub.com/best-practices-for-restful-web-services-naming-conventions-and-api-versioning-tutorial/