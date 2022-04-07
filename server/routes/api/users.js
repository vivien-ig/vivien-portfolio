//handle registering and getting users
//endpoint for users routes is api/users

const express = require('express');
const router=express.Router();
const gravatar=require('gravatar');
const bcrypt= require ('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require("config");
const {check, validationResult, Result}=require('express-validator')
//bring in user model
const User = require('../../models/User');


//@route api/users POST
//desc Register users
//access PUBLIC route..dont need a token for authentication/authorization
router.post('/', 
[check ('name','name is required').not().isEmpty()], 
[check ('email', 'input must be an email').isEmail()],
[check('password', 'must be minimum of 6 characters').isLength({min:6})],
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
	const {name , email, password} = req.body;
try{
/**** see if user already exists --prevent multiple registration****/
let user= await User.findOne({email:email})
if(user){
	return res.status(400).json({errors:[{msg:"user already exists"}] })
}

//get users gravatar
const avatar=gravatar.url(email, {
	s: '200', /**default size set to 200 */
	r:'pg', /** rating to disallow improper images like naked ppl */
	d:'mm'  /** default --gives you a default image */
});

//below code doesnt save the user yet, just creates a new instance
//to save user, we will call user.save after encrypting password using bcrypt
user= new User({
	name,
	email,
	avatar,
	password  /** this password is not hashed at this point */
})

//encrypt users password
const salt= await bcrypt.genSalt(10);
user.password= await bcrypt.hash(password, salt);

await user.save();

//return users json web token-- needed to ensure user stays logged in
//payload:jwy=t.sign takes payload and a secret
// the secret is set in config folder- default.json
//token is set to expire in 1hr - 3600secs, you can add zeros to increase expiry time
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