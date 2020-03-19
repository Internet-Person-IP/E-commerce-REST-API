const sql = require('../util/database');

exports.getAllOrders =(req,res) =>{
    sql.execute(``)
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


exports.getOrder = (req,res) =>{
    sql.execute(`
    
    
    
    `,[])
    .then(([rows, fields]) => {
        res.status(200).json({Order:rows});
    })
    .catch((err) => {
        console.log(err);
        res.status(404),json({statusCode:404});
    })
}
//when create return object
exports.createOrder = (req,res) => {
    sql.execute(`
    
    
    `,[])
    .then(([rows,fields]) =>{
        res.status(201).json({newOrder:rows});
    })
    .catch((err) => {
        console.log(err);
        res.status(401).json({statusCode:401});
    });
}
/*
exports.update =(req,res) =>{
    sql.execute(``,[])
    .then(([rows,fields]) => {
        res.status(200).json({UpdatedProduct:rows});
    })
    .catch(err =>{
        console.log(err);
        res.status(401).json({statusCode:401});

    });
}
*/
exports.deleteOrder = (req,res) =>{
    sql.execute(``,[])
    .then(([rows,fields]) => {
        res.status(200).json({DeletedOrder:rows});
    })
    .catch(err => {
        console.log(err);
        res.status(401).json({statusCode:401});
    });

}

