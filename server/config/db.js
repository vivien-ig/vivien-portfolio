const mongoose=require('mongoose');
const config=require('config');

//GET URI string from default.json
const db=config.get('mongoURI');

//connect to db using mongoose

const connectDB= async()=>{
	try{
	 await mongoose.connect(db, { 
		 useNewUrlParser: true
		 
		});
	 console.log("Mongo db connected");
	}catch(err){
		console.error(err.message);
		//exit process with failure exit code 1
		process.exit(1);
	}
}
module.exports=connectDB;