const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
    CREATE TABLE OrderItem (
    orderID INT NOT NULL,
    productID INT NOT NULL,
    quantity INT NOT NULL
    FOREIGN KEY(orderID) REFERENCES Order(Id),
    FOREIGN KEY(productID) REFERENCES Product(id)
    );`)
    .then(() => console.log("User Table Created"))
    .catch((err) => console.log(err));
}



