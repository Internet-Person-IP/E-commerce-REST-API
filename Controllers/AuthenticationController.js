const sql = require('../util/database');
const sqlstring =require('sqlstring');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.JWT_SECRET; 
const bcrypt= require('bcrypt');
const {Authorize} = require('../util/AuthorizationRBAC');
exports.Login = async (req,res) => {
    const { email } = req.body;
    const [rows, fields]= await sql.execute(`
    SELECT Id, name, password, role
    FROM User WHERE email=?
    `,[email]);
    console.log(rows[0])
    const {Id,name,password,role} = rows[0];

    const validPassword= await bcrypt.compare(req.body.password,password);
    // Filter user from the users array by username and password
    if (validPassword) {
        // Generate an access token
        const accessToken = jwt.sign({ userID: Id,  role: role }, accessTokenSecret);

        res.status(200).json({accessToken});
    } else {
        res.status(401).json({
            authentication: false,
            message: "Wrong Email or Password"
        });
    }
}


exports.JWTAuthentication = (req,res,next) =>{
    const JWTToken=req.headers.token;
    jwt.verify(JWTToken,accessTokenSecret, (err,user)=>{
        if(err){
            res.json({message:"This is stupid"});
        }else{
        req.user=user;
        next();
    }
    })
}
/*
I want to check if Customer Own or Admin
if(Authorize.can(req.user.role)[action](resource))
I want to check if Customer Own or Admin
if(Authorize.can(req.user.role)[action](resource))




Order:

*/
exports.grantAccess = (action, resource,reqObj,reqVar)=> {
    return async (req, res, next) => {
        try {
            console.log(req[reqObj][reqVar], Authorize.can(req.user.role)[action](resource), req.user.userID);
            let permission;
            if(req.user.role==='Customer'){
                //req.params.id req.body.id reqObj=params reqVar=id => req.params.id
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

    
exports.grantAccessViaDB = (action, resource,reqObj,reqVar,Column,Table,FilterName)=> {
    return async (req, res, next) => {
        try {
            console.log(req[reqObj][reqVar], Authorize.can(req.user.role)[action](resource), req.user.userID,Column,Table,FilterName,req.user.role);
            const FilterValue=req[reqObj][reqVar];
            let permission;
            if(req.user.role==='Customer'){
                console.log("Hello")
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

const getUserIDFromDB = async (Column,Table,FilterName,FilterValue)=> {
    try{
        console.log(sqlstring.format(`SELECT ${Column} FROM ${Table} WHERE ${FilterName}=?;`,[FilterValue]));
        console.log(Column,Table,FilterName,FilterValue);
    const [rows,fields]=await sql.query(sqlstring.format(`SELECT ${Column} FROM ${Table} WHERE ${FilterName}=?;`,[FilterValue]));
    console.log(rows[0][Column]);
    return rows[0][Column];
    }catch(err){

    }
}



/*


*/
