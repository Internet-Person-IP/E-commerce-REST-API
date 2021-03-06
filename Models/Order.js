const sql = require("../util/database");

exports.createTable = async () => {
    await sql.query(`
    CREATE TABLE Orders (
    Id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    orderDate DATETIME NOT NULL,
    TOTALPRICE DECIMAL NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY(userID) REFERENCES User(Id)
    );`)
    .then(() => console.log("Order Table Created"))
    .catch((err) => console.log(`Error: ${err.message}`));
}



