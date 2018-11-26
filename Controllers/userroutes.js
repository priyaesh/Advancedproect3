const Router = require('express').Router();
user = require('../Models/user.models.js');

Router.get('/',(req,res)=>{
	user.find({}).exec((error,users)=>{
		if(error){
			res.send(error);
		}else{
			res.send(users);
		}
	})
	res.send('this is where the user info is ');
})

module.exports = Router;