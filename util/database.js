const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'nodejs',
    database:'e_commerce_app',
    password :'123456'
});

module.exports = pool.promise();

//maybe do promise but why?
