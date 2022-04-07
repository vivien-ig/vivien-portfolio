const express = require('express');
const request=require('request');
const connectDB=require('./config/db');
const cors=require('cors');

//run express
const app=express();

/* const corsOptions = {
    origin: 'http://thevivbrand.com:3000'
}

app.use(cors(corsOptions)); */
//app.use(cors());
//app.use(express.static('public'));
//connect database
connectDB();

//initialise middleware body-parser to enableus use req.body
//b4 we'd have to npm install body-parser b4 use, but it is now included in express..
//so we just do app.use instead..no install required.body
//line below allows us get data from req.body
app.use(express.json());

//test end point to test connections
app.get('/', (req,res)=>
	res.send("API Running"));

//define routes	
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, (req,res)=>{
	console.log(`server started on port ${PORT}`);
});