//handle getting json web token for authentication
//endpoint for auth routes is api/auth

const express = require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const User=require('../../models/User');
const jwt=require('jsonwebtoken');
const config=require("config");
const bcrypt= require ('bcryptjs');
const {check, validationResult, Result}=require('express-validator')

//@route api/auth GET
//access PUBLIC route..dont need a token for authentication/authorization
//to make the route protected, we add the middleware- auth
//whenever we want to use the middleware- auth, we add it as a second parameter in router.get.. see code below

/** authenticate user by verifying token */
router.get('/',auth, async(req,res)=>{
	try{
const user= await User.findById(req.user.id).select('-password');
//send user object decoded from token
res.json(user);
	}catch(err){
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

/** authenticate user login after token verification */
//user to enter password,then expectation is to return a token inother to allow us make requests to other private routes
//copy code from auth/api/users.js t make it easy for typing

/******************** */
//@route api/auth POST
//desc Authenticate user and get token
//access PUBLIC route..purpose is to get token so we can make requests to private routes
router.post('/', 
[check ('email', 'Please include valid email').isEmail()],
[check('password', 'Password is required').exists()],
/** [check ('username','username is required').not().isEmpty()], **/
async (req,res)=> {
	//console.log(req.body); --to get request sent or re.body.name etc
	const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array()})
	}
	//get the request sent using req.body
	//destructure req.body
	/** const {name , email, password, username} = req.body; */
	const { email, password} = req.body;
try{
/**** see if user already exists --prevent multiple registration****/
let user= await User.findOne({email:email})
if(!user){
	return res
	.status(400)
	.json({errors:[{msg:"Invalid Credentials"}] })
}

//use bcrypt method- comapre to compare the passwords
//compare takes plain text password user enters ,  and compares
//with encrypted password we already have during user registration
const isMatch= await bcrypt.compare(password, user.password);
if(!isMatch){
	return res
	.status(400)
	.json({errors:[{msg:"Invalid Credentials"}] })

}

const payload={
	user:{
		id:user.id
	}
}

jwt.sign(
	payload, 
	config.get('jwtSecret'),
	{
	expiresIn:3600	
	},
	(err, token)=>{
		if(err) throw err;
		res.json({token});
	}
	);

//res.send("User successfully registered")

}catch(err){
	console.error(err.message);
    res.status(500).send("server error");
}

});

module.exports=router;