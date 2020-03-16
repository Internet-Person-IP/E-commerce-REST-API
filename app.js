const express = require('express');
const app = express();
const productsRoutes = require('./Routes/ProductRoutes');
const userRoutes = require('./Routes/UserRoutes');
const User = require("./Models/User");
const Product = require("./Models/Product");
const PORT = process.env.PORT || 5000;


User.createTable();
Product.createTable();

app.use(express.json());
//app.use(express.urlencoded({extended:false}));
app.use('/products', productsRoutes);
app.use('/user',userRoutes);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));