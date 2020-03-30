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
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Cant get Products from DB",
            Error:err
        });
    });
}

//Add Record not found error
exports.getProduct = (req,res) =>{
    sql.execute(`
    SELECT * FROM Product WHERE id=?;
    `,[req.params.id])
    .then(([rows, fields]) => {
        if(rows.length===0){
            res.status(404).json({
                statusCode:404,
                message:`Product with Id ${req.params.id} does not exist`            
            });
        }else{
            res.status(200).json({product:rows});
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500),json({
            statusCode:500,
            message:"Internal Server Errors Cant get Product from DB",
            Error:err
        });
    })
}

exports.getProductCreatedProducts = (req,res) =>{
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
    const {ProductName,Description,PictureURL,CreatorID,Price} =req.body;
    sql.execute(`
    INSERT INTO Product 
    (ProductName, PictureURL,Description,CreatorID,Price)
    VALUES
    (?,?,?,?,?);
    `,[ProductName,PictureURL,Description,CreatorID,Price])
    .then(([rows,fields]) =>{
        res.status(201).json({
            newProduct:{
                "ProductName":ProductName,
                "PictureURL":PictureURL,
                "Description":Description,
                "Price":Price,
            }
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Can not create Product in DB",
            Error:err
        });
    });
}

exports.updateProduct =(req,res) =>{
    const {ProductName,Description,PictureURL,Price} =req.body;
    sql.execute(`
    UPDATE Product SET
    ProductName=?,
    PictureURL=?,
    Description=?,
    Price=?
    WHERE Id=?;
    `,[ProductName,PictureURL,Description,Price,req.params.id])
    .then(([rows,fields]) => {
        res.status(200).json({UpdatedProduct:{
            "ProductName":ProductName,
            "PictureURL":PictureURL,
            "Description":Description,
            "Price":Price,  
        }});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Can not update product in DB",
            Error:err
        });

    });
}

exports.deleteProduct = (req,res) =>{
    sql.execute(`
    DELETE FROM Product WHERE Id=?
    `,[req.params.id])
    .then(([rows,fields]) => {
        res.status(200).json({
            success:true,
            message:`Deleted Product ${req.params.id}`
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            statusCode:500,
            message:"Internal Server Errors Can delete Product in DB",
            Error:err
        });
    });

}

