const sql = require("../util/database");

exports.createTable = () => {
    sql.query(`
    CREATE TABLE OrderItem (
    orderID INT NOT NULL,
    productID INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY(orderID) REFERENCES Orders(Id),
    FOREIGN KEY(productID) REFERENCES Product(Id)
    );`)
    .then(() => console.log("OrderItem Table Created"))
    .catch((err) => console.log(`Error: ${err.message}`));
}



