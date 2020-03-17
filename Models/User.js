const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
    CREATE TABLE User (
    Id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY(Id)
    );`)
    .then(() => console.log("User Table Created"))
    .catch((err) => console.log(err));
}



