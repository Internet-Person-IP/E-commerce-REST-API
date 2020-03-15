const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
    CREATE TABLE IF NOT EXISTS User (
    Id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY(Id)
    );`)
    .then(() => console.log("Table Created for User"))
    .catch((err) => console.log("Table already created or something else: " + err));
}



