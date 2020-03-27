const sql = require('../util/database');
/*
How 
/carts
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
        res.status(400).json({statusCode:400});
    });
}

exports.AddCartItem =(req,res) =>{
    sql.execute(`
    INSERT INTO CART
    (userID,productID,Quantity)
    VALUES
    (?,?,?);
    `, [req.body.userID,req.body.productID,req.body.Quantity])
    .then(([rows,fields]) =>{
        res.status(200).json({newCartItem:rows});
    })
    .catch(err =>{
        console.log(err);
        res.status(400).json({statusCode:401});
    });
}
exports.UpdateCartItem = (req,res) =>{
     sql.execute(`
    UPDATE Cart SET
    Quantity=?
    WHERE userID=? AND productID=?;
    `,[req.body.Quantity,req.params.userID, req.body.productID])
    .then(([rows,fields]) =>{
        res.status(200).json({
            UpdatedCartItem: rows
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({statusCode:404});
    });
}
exports.DeleteCartItem = (req,res) =>{
    sql.execute(`
    DELETE FROM Cart WHERE userID=? AND productID=?
    `,[req.params.userID,req.body.productID])
    .then(([rows,fields]) =>{
        res.status(200).json({DeletedProduct:rows});

    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({statusCode:404});

    });
}






