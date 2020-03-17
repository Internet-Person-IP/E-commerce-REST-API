const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
    CREATE TABLE Order (
    Id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    orderDate DATETIME NOT NULL,
    TOTALPRICE DECIMAL NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY(userID) REFERENCES User(Id)
    );`)
    .then(() => console.log("Order Table Created"))
    .catch((err) => console.log(err));
}



