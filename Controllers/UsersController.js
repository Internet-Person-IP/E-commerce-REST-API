const sql = require('../util/database');
const bcrypt = require('bcrypt');
/* 
So this is used in all controller.

sql.execute is a prepared statement which makes it harder for 
SQL injections since the query and the data are not sent at the same time.
it works but first typing a query but everytime you add user created data you 
add it through an array as a second argument.

*/



/*

We use brypt as a security encryption to prevent possible password leaks.
We also give all user the role customer. If a persons whats a admin role they have
to contact the DB admin. This is is a security messure to prevent people from being able 
to have full access to the DB system.
*/
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

