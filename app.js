const express = require('express');
const app = express();
//const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require('swagger-ui-express');
const productsRoutes = require('./Routes/ProductRoutes');
const userRoutes = require('./Routes/UserRoutes');
const cartRoutes = require('./Routes/CartRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const User = require("./Models/User");
const Product = require("./Models/Product");
const Order = require("./Models/Order");
const OrderItem = require("./Models/OrderItem");
const Cart = require("./Models/Cart");
const PORT = process.env.PORT || 5000;
const swaggerDocumentation = require("./docs/docs");
/*swaggerOptions ={
    swaggerDefinition:{
        info: {
        title: "E-commerce API",
        description: `API that can be consumed by a frontend Application`
        },
        servers: ["http://localhost:5000"]
    },
    apis: ["app.js"]

};

const swaggerDocs=swaggerJsDoc(swaggerOptions);
*/
User.createTable();
Product.createTable();
Cart.createTable();
Order.createTable();
OrderItem.createTable();
//Add Correct REST Responses
app.use(express.json());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocumentation))
//app.use(express.urlencoded({extended:false}));
app.use('/products', productsRoutes);
app.use('/users',userRoutes);
app.use('/carts', cartRoutes);
app.use('/orders',orderRoutes);
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));