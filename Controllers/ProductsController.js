const sql = require('../util/database');

exports.getAllProducts =(req,res) =>{
    sql.execute(`
    SELECT * FROM Product;
    `)
    .then(([rows,fields]) =>{    
        res.status(200).json({
            AllProducts:rows
        });
    })
    .catch((err)=>{ 
        console.log(err);
        res.status(404).json({statusCode:404});
    });
}

//Add Record not found error
exports.getProduct = (req,res) =>{
    sql.execute(`
    SELECT * FROM Product WHERE id=?;
    `,[req.params.id])
    .then(([rows, fields]) => {
        res.status(200).json({product:rows});
    })
    .catch((err) => {
        console.log(err);
        res.status(404),json({statusCode:404});
    })
}
//when create return object
exports.createProduct = (req,res) => {
    sql.execute(`
    INSERT INTO Product 
    (ProductName, PictureURL,Description,CreatorID,Price)
    VALUES
    (?,?,?,?,?);
    `,[req.body.ProductName,req.body.PictureURL,req.body.Description,req.body.CreatorID,req.body.Price])
    .then(([rows,fields]) =>{
        res.status(201).json({newProduct:rows});
    })
    .catch((err) => {
        console.log(err);
        res.status(401).json({statusCode:401});
    });
}

exports.updateProduct =(req,res) =>{
    sql.execute(`
    UPDATE Product SET
    ProductName=?,
    PictureURL=?,
    Description=?,
    CreatorID=?,
    Price=?
    WHERE Id=?;
    `,[req.body.ProductName,req.body.PictureURL,req.body.Description,req.body.CreatorID,req.body.Price,req.params.id])
    .then(([rows,fields]) => {
        res.status(200).json({UpdatedProduct:rows});
    })
    .catch(err =>{
        console.log(err);
        res.status(401).json({statusCode:401});

    });
}

exports.deleteProduct = (req,res) =>{
    sql.execute(`
    DELETE FROM Product WHERE Id=?
    `,[req.params.id])
    .then(([rows,fields]) => {
        res.status(200).json({DeletedProduct:rows});
    })
    .catch(err => {
        console.log(err);
        res.status(401).json({statusCode:401});
    });

}

