const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'e_commerce_app',
    password :'kavitha',
    multipleStatements: true
});

module.exports = pool.promise();

//maybe do promise but why?
