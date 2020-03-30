const sql = require("../util/database");

exports.createTable = async () => {
    await sql.query(`
    CREATE TABLE Product (
    Id INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    PictureURL VARCHAR(255) NOT NULL,
    Description TEXT,
    creatorID INT NOT NULL,
    Price DECIMAL NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY(creatorID) REFERENCES User(Id) ON DELETE CASCADE
    );`)
    .then(() => console.log("Product Table Created"))
    .catch(err => console.log(`Error: ${err.message}`));
    
}