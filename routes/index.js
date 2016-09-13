var express = require('express');
var router = express.Router();
var url = require('url');
var authenticate = require('../components/oauth/authenticate')

/* GET home page. */
router.get('/', function(req, res, next) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var cont = query.continue
  if(!cont) {
    cont = "http://127.0.0.1/"
  }
  var cont = "http://127.0.0.1/"
  res.render('index', { title: 'BlerpIt Oauth 2.0 Login', 'continue':cont });
});
router.post('/authenticate', function(req, res, next) {
  res.render('index', { title: 'BlerpIt Oauth 2.0 Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'BlerpIt Oauth 2.0 Register' });
});
router.get('/my-account', function(req, res, next) {
  res.render('my-account', { title: 'BlerpIt Oauth 2.0 Register' });
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'BlerpIt Oauth 2.0 Forgot Password' });
});
router.get('/callback', function(req, res, next) {
  res.render('callback', { title: 'BlerpIt Oauth 2.0 Account Callback' });
});
router.get('/authorize', function(req, res, next) {
  // var auth = req.headers['Authorization'];
  // if(!auth) {
  //   res.set("Authorization","Bearer MainApplicationKey")
  // }
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.render('authorize', { title: 'BlerpIt Oauth 2.0 Authorization', client_id: query.client_id, scope:query.scope, agreeUrl:req.url });
});

router.get('/client-registration', function(req, res, next) {
  res.render('new-client-registration', { title: 'BlerpIt Oauth 2.0  Client Registration'});
});

router.post('/client-registration', function(req, res, next) {
  var bod = req.body;
  var username = "blerpit";
  var password = "blerpitsecret";
  var appPublid = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
  var appsecret = "appsecret"

  res.render('new-client-registration-success', { title: 'BlerpIt Oauth 2.0 Client Registration', client_id: bod.client_id, app_url:bod.app_url, client_private:appsecret, client_public: appPublid});
});

router.get('/forgot-password-reset/:token', function(req, res, next) {
  res.render('forgot-password-reset', { title: 'BlerpIt Oauth 2.0 Forgot Password Reset', token: req.params.token });
});

router.post('/authenticate', function(req, res, next) {
  // res.render('index', { title: 'BlerpIt Oauth 2.0 Login' });

});
router.post('/forgot-password', function(req, res, next) {
  res.render('forgot-password-sent', { title: 'BlerpIt Oauth 2.0 Forgot Password Sent' });
});


module.exports = router;
