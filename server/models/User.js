//file name must start with upper case
//create the schema for db access

const mongoose=require('mongoose');
const UserSchema= new mongoose.Schema({
name:{
	type:String,
	required:true
},
email:{
	type:String,
	required:true,
	unique:true
},
password:{
	type:String,
	required:true

},
avatar:{
	type:String
},
date:{
	type:Date,
	default:Date.now
}

});
//create variable called User and assign to module.export
//User is set to mongoose.model (which takes in model name 
//called 'user'(variable for any user on the db) as well as the just created UserSchema)
module.exports=User= mongoose.model('user',UserSchema);