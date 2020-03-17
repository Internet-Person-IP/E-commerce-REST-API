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

exports.getProduct = (req,res) =>{
    res.status(200).json(products[req.params.id]);
}

exports.createProduct = (req,res) => {
    const newFood={
        id: req.body.id,
        name: req.body.name
    }
    products=[...products,newFood];

    res.json(products);

}

exports.updateProduct =(req,res) =>{
    sql.execute()
    .then()
    .then()
    .catch();
}

exports.deleteProduct = (req,res) =>{
    sql.execute()
    .then()
    .then()
    .catch();

}

