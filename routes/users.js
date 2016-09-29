var express = require('express');
var router = express.Router();
var register = require('../components/oauth/register')
var users = require('../components/oauth/users')
var authenticate = require('../components/oauth/authenticate')


router.post('/register', function(req, res, next) {
  var bod = req.body;
 
  var mod = {
  	 username: bod.username,
     firstname: bod.first,
     lastname: bod.last,
     password: bod.password,
     phone: bod.phone,
     lang: bod.lang,
     gender: bod.gender,
     email: bod.email,
     timezone: bod.timezone,
     birthdate: bod.birthdate,
     scope: 'owner'
  }
  register.registerUser(mod).then(function(data, err){
  	console.log(data);
  	res.render('registration-check-email', { title: 'BlerpIt Oauth 2.0 User Registration Success - Confirm your email'});
  })
  
});
router.get('/profile/:profileId', authenticate({scope:'view_profiles'}), function(req,res){
	users.getUser(req.params.profileId).then(function(data){
		console.log(data)
		res.json({
	    	profile: data
	  	})
	})
  
});
router.get('/me', authenticate({scope:'view_profiles'}), function(req,res){
	users.getUser(req.user.User.id).then(function(data){
		console.log(data)
		res.json({
	    	profile: data
	  	})
	})
  
});
module.exports = router;
