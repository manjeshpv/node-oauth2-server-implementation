var express = require('express');
var router = express.Router();
var register = require('../components/oauth/register')
var users = require('../components/oauth/users')
var authenticate = require('../components/oauth/authenticate')
var session = require('../components/oauth/session')


router.get('/:userId/my-account', function(req, res, next) {
  res.render('my-account', { title: req.params.userId +' My Account' });
});

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
  register.registerUser(mod).then(function(data, err) {
  	console.log(data);
  	res.render('registration-check-email', { title: 'Oauth 2.0 User Registration Success - Confirm your email'});
  })
  
});

router.get('/:profileId/logout', function(req,res) {
  // Load the page/app if there is a session... 
  var cookie = req.cookies.browserSession
  if (cookie) {
    console.log(cookie)
    session.removeSessionUser(cookie, req.params.profileId).then(function(data) {
      console.log(data);
      res.redirect("/");
    })
  } else {
    console.log('no session');
    res.redirect("/");
  }
});

router.get('/:profileId/account', function(req,res) {
	// Load the page/app if there is a session... 
 // if (req.cookies.browserSession) {
  //    users.getUser(req.params.profileId).then(function(data) {
  //   console.log(data);
    
  // })
    res.render('my-account', { title: 'Oauth 2.0 Register'});
  // } else {
  //   res.redirect('/?redirect_uri=/accounts/' + req.params.profileId);
  // }
});

router.get('/me', authenticate({scope:'view_profiles'}), function(req,res) {
	users.getUser(req.user.User.id).then(function(data) {
		//console.log(data);
		res.json({
	    	profile: data
	  	})
	})
  
});
module.exports = router;
