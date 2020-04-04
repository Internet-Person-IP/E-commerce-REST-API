const sql = require('../util/database');
const sqlstring = require('sqlstring');
/* 
So this is used in all controller.

sql.execute is a prepared statement which makes it harder for 
SQL injections since the query and the data are not sent at the same time.
it works but first typing a query but everytime you add user created data you 
add it through an array as a second argument.

*/
exports.getAllOrders = (req, res) => {
    console.log(req.params.userID)
    sql.execute(`
    SELECT Id, DATE_ADD(orderDate, INTERVAL 1 HOUR) AS DATE, TOTALPRICE FROM Orders WHERE userId=?;
    `,[req.params.userID])
    .then(([rows,fields]) =>{    
        res.status(200).json({
            AllOrders:rows
        });
    })
    .catch((err)=>{ 
        console.log(err);
        res.status(404).json({statusCode:404});
    });
}



/*
GetOrder gets all the orderItems and the products in that order aswell.
In this query we get to know what products are in the order
We do this by joining the Orders with the OrderItem table which works as a join table.
Then we joing on the product table to be able to get all the product related information
in the query.

The last union get the total price for that order.
*/

exports.getOrder = (req, res) => {
    sql.execute(`
    SELECT o.Id,o.orderDate,oi.productID,p.ProductName,p.Price,oi.quantity,p.Price*oi.quantity AS TotalCost
    FROM Orders o 
    INNER JOIN OrderItem oi 
    ON o.Id=oi.orderID
    INNER JOIN Product p
    ON p.Id=oi.productID
    WHERE o.Id=?  
    UNION ALL
    SELECT NULL,NULL,NULL,NULL,NULL,NULL,TOTALPRICE 
    FROM Orders o2 
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

/*
This is sort of a special function 
The main problem is that when creating an order
we need to manipulate multiple tables. This can be 
done by having a huge query or by creating an transaction.
We decided to create a transaction.
The transaction is rather simple,
we get the total price from the cart and store it in a variable.
We then insert the the total price and the order into the order table
we then insert all orderitems from the cart and add the last insert ID 
which is the orderID.
Lastly we remove all the products from the cart.

In orders we use sql string for escape the query and prevent sql injection.
The reason for using sqlstring instead of sql.execute is because sql.execute 
does not support multi statement queries. Therefore we used sql.query here.

*/
exports.createOrder = (req, res) => {
    const userID = req.body.userID;
    const query = sqlstring.format(`
    START TRANSACTION;
        SET @t =(SELECT SUM(c.Quantity*p.price) 
        FROM Product p
        INNER JOIN Cart c 
        ON c.userID=? AND p.Id=c.productID);

        INSERT INTO Orders (userId,orderDate, TOTALPRICE)
        VALUES
        (?,NOW(),@t);

        INSERT INTO OrderItem(orderID,productID,quantity)
        SELECT 
        (SELECT LAST_INSERT_ID()),productID, Quantity 
        FROM Cart 
        WHERE userID=?;

        DELETE FROM Cart 
        where userID=?;
    COMMIT;
    `, [userID, userID, userID, userID]);
    sql.query(query)
    .then(([rows,fields]) =>{
        res.status(201).json({newOrder:{
            message:"Order Created From Cart"
        }});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message: "Internal Server Errors Cant create Order in DB"
        });
    });
}
