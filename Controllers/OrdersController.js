const sql = require('../util/database');
const sqlstring = require('sqlstring');

exports.getAllOrders = (req, res) => {
    console.log(req.params.userID)
    sql.execute(`
    SELECT Id, DATE_ADD(orderDate, INTERVAL 1 HOUR) AS DATE, TOTALPRICE FROM orders WHERE userId=?;
    `, [req.params.userID])
        .then(([rows, fields]) => {
            res.status(200).json({
                AllOrders: rows
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ statusCode: 404 });
        });
}


exports.getOrder = (req, res) => {
    sql.execute(`
    SELECT o.Id,o.orderDate,oi.productID,p.ProductName,p.Price,oi.quantity,p.Price*oi.quantity AS TotalCost
    FROM orders o 
    INNER JOIN orderitem oi 
    ON o.Id=oi.orderID
    INNER JOIN product p
    ON p.Id=oi.productID
    WHERE o.Id=?  
    UNION ALL
    SELECT NULL,NULL,NULL,NULL,NULL,NULL,TOTALPRICE 
    FROM orders o2 
    WHERE o2.Id=?;
    `, [req.params.orderID, req.params.orderID])
        .then(([rows, fields]) => {
            console.log(rows);
            const TotalPriceOfOrder = rows.pop().TotalCost;
            res.status(200).json({
                Order: rows,
                TotalPrice: TotalPriceOfOrder
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(404), json({ statusCode: 404 });
        })
}
//when create return object
exports.createOrder = (req, res) => {
    const userID = req.body.userID;
    const query = sqlstring.format(`
    START TRANSACTION;
        SET @t =(SELECT SUM(c.Quantity*p.price) 
        FROM Product p
        INNER JOIN Cart c 
        ON c.userID=? AND p.Id=c.productID);

        INSERT INTO orders (userId,orderDate, TOTALPRICE)
        VALUES
        (?,NOW(),@t);

        INSERT INTO orderitem(orderID,productID,quantity)
        SELECT 
        (SELECT LAST_INSERT_ID()),productID, Quantity 
        FROM cart 
        WHERE userID=?;

        DELETE FROM Cart 
        where userID=?;
    COMMIT;
    `, [userID, userID, userID, userID]);
    sql.query(query)
        .then(([rows, fields]) => {
            res.status(201).json({ newOrder: rows });
        })
        .catch((err) => {
            console.log(err);
            res.status(401).json({ statusCode: 401 });
        });
}

/*
exports.deleteOrder = (req,res) =>{

    sql.execute(`

    `,[])
    .then(([rows,fields]) => {
        res.status(200).json({DeletedOrder:rows});
    })
    .catch(err => {
        console.log(err);
        res.status(401).json({statusCode:401});
    });

}
*/