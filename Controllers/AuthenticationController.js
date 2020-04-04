const sql = require('../util/database');
const sqlstring =require('sqlstring');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.JWT_SECRET; 
const bcrypt= require('bcrypt');
const {Authorize} = require('../util/AuthorizationRBAC');
/* 
So this is used in all controller.

sql.execute is a prepared statement which makes it harder for 
SQL injections since the query and the data are not sent at the same time.
it works but first typing a query but everytime you add user created data you 
add it through an array as a second argument.

*/


/*
loggin is simple we check if email exist and the we check if password is valid for that user.
If that is true then we return a 200 with a JWT token with the role of the user and the userID.
Otherwise we return 401 with access denied.

*/
exports.Login = async (req,res) => {
    const { email } = req.body;
    const [rows, fields]= await sql.execute(`
    SELECT Id, name, password, role
    FROM User WHERE email=?
    `,[email]);
    console.log(rows[0])
    const {Id,name,password,role} = rows[0];

    const validPassword= await bcrypt.compare(req.body.password,password);
    if (validPassword) {
        const accessToken = jwt.sign({ userID: Id,  role: role }, accessTokenSecret);

        res.status(200).json({accessToken});
    } else {
        res.status(401).json({
            authentication: false,
            message: "Wrong Email or Password"
        });
    }
}

/*
This checks if they have a valid JWT token or not
but also if they do we put the user into the req body
We do this so that the next middleware can easily access userID and Role
*/

exports.JWTAuthentication = (req,res,next) =>{
    const JWTToken=req.headers.token;
    jwt.verify(JWTToken,accessTokenSecret, (err,user)=>{
        if(err){
            res.json({message:"You do not have permission to do this action"});
        }else{
        req.user=user;
        next();
    }
    })
}
/*

grantAccess is a rather complicated function but lets break it down.
grantAccess the role of the User is customer. 
If it is we check if that customer is authorized for this resource.
If he is then we check if the userID of the JWT Token is the same as the request. 
Since the user should only be able to check his own products
The reason for having a dynamic way of accessing the UserID in the request object is
because the userID is sent in different places depending on if it is a GET,POST,PUT or DELETE request
for example req.body.userID or req.params.userID

If the person is not a customer then we check if that user is Authorized for that resource.
If they are the correct user or the have the correct privileges they are able to access the next middleware
otherwise they get a 401 error.
*/
exports.grantAccess = (action, resource,reqObj,reqVar)=> {
    return async (req, res, next) => {
        try {
            let permission;
            if(req.user.role==='Customer'){
                permission=(Authorize.can(req.user.role)[action](resource).granted) ? (req.user.userID == req[reqObj][reqVar]) : false;
            }else{
                permission=Authorize.can(req.user.role)[action](resource).granted;
            }
             
            if (!permission) {
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}

/*
grantAccessViaDB is very similar to grantAccess.
Main difference is that the endpoint does not have a userID in
either the body or the params. Therefore we need to access the DB to
know who owns the resource and if a customer is authorized. 


*/
    
exports.grantAccessViaDB = (action, resource,reqObj,reqVar,Column,Table,FilterName)=> {
    return async (req, res, next) => {
        try {
            const FilterValue=req[reqObj][reqVar];
            let permission;
            if(req.user.role==='Customer'){

                permission=(Authorize.can(req.user.role)[action](resource).granted) ? 
                (await getUserIDFromDB(Column,Table,FilterName,FilterValue) ==req.user.userID)
                :false;
            }else{
                permission=Authorize.can(req.user.role)[action](resource).granted;
            }
             
            if (!permission) {
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}

/* 
This function is used as way to get the userID from different tables in the database.

*/
const getUserIDFromDB = async (Column,Table,FilterName,FilterValue)=> {
    try{
    const [rows,fields]=await sql.query(sqlstring.format(`SELECT ${Column} FROM ${Table} WHERE ${FilterName}=?;`,[FilterValue]));
    return rows[0][Column];
    }catch(err){
        console.log(err);

    }
}
