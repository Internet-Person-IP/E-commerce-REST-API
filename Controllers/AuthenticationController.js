const sql = require('../util/database');
const sqlstring =require('sqlstring');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'bbfa7b3d-3a1d-458b-aaad-866bf1b70dc2'; 
exports.AuthenticateUser = async (req,res) => {
    const { username, password } = req.body;
    const [rows, fields]= await sql.execute(``,[]);
    // Filter user from the users array by username and password
    if (true) {
        // Generate an access token
        const accessToken = jwt.sign({ userID: UserID,  role: user.role }, accessTokenSecret);

        res.status(200).json({accessToken});
    } else {
        res.send('Username or password incorrect');
    }
}




