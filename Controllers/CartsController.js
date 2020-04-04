const sql = require('../util/database');

/* 
So this is used in all controller.

sql.execute is a prepared statement which makes it harder for 
SQL injections since the query and the data are not sent at the same time.
it works but first typing a query but everytime you add user created data you 
add it through an array as a second argument.

*/

/*
Get Cart gets the CartItems for a specific user.
In this query when gettin the cart we want to know 
What product is in the cart.
To be able to do this we need to make a 
JOIN query between Cart and Products
Where we check which users Cart we are trying to access.
The last Union gets total price of the Cart.
*/

exports.GetCartItem = (req,res) =>{
    sql.execute(`
    SELECT p.ProductName, p.price, c.Quantity,c.Quantity*p.price AS "Total"
    FROM Product p INNER JOIN Cart c
    ON c.userID=? AND p.Id=c.productID 
    UNION ALL
    SELECT NULL,NULL,NULL,SUM(c.Quantity*p.price) 
    FROM Product p INNER JOIN Cart c
    ON c.userID=? AND p.Id=c.productID;
    `,[req.params.userID,req.params.userID])
    .then(([rows,fields]) =>{
        const TotalPriceOfCart=rows.pop().Total;
        res.status(200).json(
            {
            cart:rows,
            TotalPriceOfCart:TotalPriceOfCart
            });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Cant get Cart from DB",
            Error:err
        });
    });
}

exports.AddCartItem =(req,res) =>{
    const {userID,productID,Quantity}=req.body;
    sql.execute(`
    INSERT INTO Cart
    (userID,productID,Quantity)
    VALUES
    (?,?,?);
    `, [userID,productID,Quantity])
    .then(([rows,fields]) =>{
        res.status(201).json({
            newCartItem:{
            productID,
            Quantity
        }});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Cant Add Cart Item to DB",
            Error:err
        });
    });
}
exports.UpdateCartItem = (req,res) =>{
    const {Quantity,productID} =req.body;
    sql.execute(`
    UPDATE Cart SET
    Quantity=?
    WHERE userID=? AND productID=?;
    `,[Quantity,req.params.userID, productID])
    .then(([rows,fields]) =>{
        res.status(200).json({
            UpdatedCartItem: {
                Quantity:Quantity,
                productID:productID
            }
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Cant Update CartItem from DB",
            Error:err
        });
    });
}
exports.DeleteCartItem = (req,res) =>{
    sql.execute(`
    DELETE FROM Cart WHERE userID=? AND productID=?
    `,[req.params.userID,req.body.productID])
    .then(([rows,fields]) =>{
        res.status(200).json({
            DeletedProduct:{
            productID:req.body.productID
        }});

    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({
            statusCode:500,
            message:"Internal Server Errors Cant Delete CartItem from DB",
            Error:err
        });

    });
}






