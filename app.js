/*
For local testing 
use .env file and use add the below line of code
require('dotenv').config()

*/


/*

Importing all NPM packges for project

*/
const express = require('express');
const app = express();
const serverless = require('serverless-http');
const swaggerUI = require('swagger-ui-express');
const PORT = process.env.PORT || 5000;
const swaggerDocumentation = require("./docs/docs");

/*
Importing all Routes
*/

const productsRoutes = require('./Routes/ProductRoutes');
const userRoutes = require('./Routes/UserRoutes');
const cartRoutes = require('./Routes/CartRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const authenticationRoutes=require('./Routes/AuthenticationRoutes');

/*
Importing Models 
*/
const User = require("./Models/User");
const Product = require("./Models/Product");
const Order = require("./Models/Order");
const OrderItem = require("./Models/OrderItem");
const Cart = require("./Models/Cart");



/*
Tables are created here if they do not already exist
*/
User.createTable();
Product.createTable();
Cart.createTable();
Order.createTable();
OrderItem.createTable();

/*

Create all endpoints for application

*/

app.use(express.json());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocumentation))
app.use('/products', productsRoutes);
app.use('/users',userRoutes);
app.use('/carts', cartRoutes);
app.use('/orders',orderRoutes);
app.use('/', authenticationRoutes)



module.exports.handler = serverless(app);

/*

For local testing use this function

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));


*/
