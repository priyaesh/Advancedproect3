const express = require('express'),
app = express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.port || 3000;
myDB = 'mongodb://localhost/advancedproject3',
User = require('./Models/user.models.js'),
UserRoutes = require('./Controllers/userroutes.js');

mongoose.connect(myDB);
app.use('./user',UserRoutes);


app.listen(port,(error)=>{
	if(!error){
		console.log('listening on port',port);
	}else{
		console.log(error);
	}

}
)



