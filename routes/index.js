var express = require('express');
var router = express.Router();
var url = require('url');
var _ = require('lodash');
var authenticate = require('../components/oauth/authenticate')
var session = require('../components/oauth/session')
var config = require('../config')
/* GET home page. */
router.get('/', function(req, res, next) {
  // var url_parts = url.parse(req.url, true);
  // var query = url_parts.query;
  // var cont = query.continue
  // if(!cont) {
  //   cont = "http://127.0.0.1/"
  // }
  // var cont = "http://127.0.0.1/"
  res.render('index', { title: 'Oauth 2.0 Login Portal' });
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Oauth 2.0 Register' });
});


router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Oauth 2.0 Forgot Password' });
});
router.get('/callback', function(req, res, next) {
  res.render('callback', { title: 'Oauth 2.0 Account Callback' });
});
router.get('/authorize', function(req, res, next) {
  //Make sure there is a browserSession Key
  var cookie = req.cookies[config.session.cookieName];
  // Make sure there is a value set
  if (cookie) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    res.render('authorize', { title: 'Oauth 2.0 Authorization', client_id: query.client_id, scope:query.scope, agreeUrl:req.url });
  } else {
    res.redirect = "/?redirect_uri=" + req.url;
  }
});

router.get('/client-registration', function(req, res, next) {
  res.render('new-client-registration', { title: 'Oauth 2.0  Client Registration'});
});


router.get('/forgot-password-reset/:token', function(req, res, next) {
  res.render('forgot-password-reset', { title: 'Oauth 2.0 Forgot Password Reset', token: req.params.token });
});


router.post('/forgot-password', function(req, res, next) {
  res.render('forgot-password-sent', { title: 'Oauth 2.0 Forgot Password Sent' });
});

router.get('/session-users', function(req, res, next) {
  var cookie = req.cookies[config.session.cookieName];
  console.log(cookie)
  console.log('get users from DB for session');
  session.getSessionUsers(cookie).then(function(users){
    return res.json({sessionId:cookie, users:users});
  });
})

module.exports = router;
