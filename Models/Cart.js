const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
        CREATE TABLE Cart (
        userID INT NOT NULL,
        productID INT NOT NULL,
        Quantity INT NOT NULL,
        FOREIGN KEY(userID) REFERENCES User(Id) ON DELETE CASCADE,
        FOREIGN KEY(productID) REFERENCES Product(Id) ON DELETE CASCADE
        );`)
    .then(() => console.log("Cart Table Created"))
    .catch((err) => console.log(err));
}



