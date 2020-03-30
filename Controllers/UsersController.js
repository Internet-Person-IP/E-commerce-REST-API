const sql = require('../util/database');
const bcrypt = require('bcrypt');
exports.createUser = async (req,res) =>{
    try{
        const {name, email, password, address} = req.body;
        const HashedPassword= await bcrypt.hash(password,10);

       const [rows,fields]= await sql.execute(`
        INSERT INTO User
        (name, email, password, address,role)
        VALUES
        (?,?,?,?,?);
        
        `,[name,email, HashedPassword, address,'Customer'])
        res.status(201).json({
            name,email,address
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            message:"Registration failed",
            Error: err
        })

    }

}

exports.getUser = (req,res) =>{
    sql.execute()
    .then()
    .then()
    .catch();
}

exports.updateUser = (req,res) =>{
    sql.execute()
    .then()
    .then()
    .catch();
}

exports.deleteUser = (req,res) =>{
    sql.execute()
    .then()
    .then()
    .catch();
}

