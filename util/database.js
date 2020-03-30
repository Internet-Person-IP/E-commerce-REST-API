const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password :process.env.DB_PASSWORD,
    multipleStatements: true
});

module.exports = pool.promise();

//maybe do promise but why?
/*{
    host:'localhost',
    user:'nodejs',
    database:'e_commerce_app',
    password :'123456',
    multipleStatements: true
}



{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password :process.env.DB_PASSWORD,
    multipleStatements: true
}*/