/** we need to send back the JSONwebtoken created in routes/api/users.js 
 * ..to send back the token that has the user.id payload to authenticate 
 * and access protective routes
*/

const jwt=require('jsonwebtoken');
const config= require ('config');

//middleware function is one that has access to request and response cycle or objects

//next is a call back we have to call when we are done so that it moves on to the next piece of middleware
module.exports = function(req, res, next){

	//get token from header
const token=req.header('x-auth-token');

//check if no token
if(!token){
	return res.status(401).json({msg:"No token, authorization denied"});
}

//verify token
//using decoded to decode token
//jwt.verify takes token and secret which is in config/default.json
//take request object and attach user which is included in the payload
try{
const decoded= jwt.verify(token, config.get('jwtSecret'));

//req.user can now be used in any of our routes/protected routes as it contains user object with decoded token
req.user=decoded.user;
next();

//if token is not valid, it enters the catch block
}catch(err){
	res.status(401).json({msg:"Token is not valid"});
}
}