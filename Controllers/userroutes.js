const Router= require('express').Router(),
User = require('../Models/user.models.js');

 Router.get('/index',(req,res)=>{
	User.find({}).exec((error,users)=>{
 		if(error){
 			res.send(error);
 		}else{
 			res.send(users);
 		}
 	})
	//res.send('this is where the user info is ');

})
 Router.post('/new',(req,res)=>{
 	let newuser = new User();
 	newuser.username = req.body.username;
 	newuser.password = req.body.password;
 	newuser.isOver21 = req.body.isOver21;
 	newuser.save((error,user)=>{
 		if(error){
 			res.send(error);
 		}else{
 			res.send(user);
 		}
 	})
 })

module.exports = Router;