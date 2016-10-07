var express = require('express');
var router = express.Router();


var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var ldap = require('../utilities/ldap')
var oauth = require('../components/oauth/oauth')


router.post('/authenticate', function(req, res, next) {
  console.log("authenticate")
  // get request body
  var bod = req.body;
  // Instantiate a new LDAP auth obj
  var ldapAuth = new ldap().auth;
  console.log(bod)
  ldapAuth(bod.username, bod.password).then(function(result) {
    // Ensure there was no auth error
    if (result.error === false) {
      // Get the Request
      var ldapReq = req;
      // Pass the returned LDAP user into the request
      ldapReq.ldapUser = result.data;
      // Make a new request and response type 
      var request = new Request(ldapReq);
      var response = new Response(res);
      // Pass the request through the Oauth Token function ** with LDAP user in request
       oauth
      .token(request, response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        return res.json({token:token,redirect_uri:request.body.redirect_uri });
      }).catch(function(err) {
        console.log(err)
        // Return error
        return res.status(500).json(err)
      })

    } else {
      res.send(JSON.stringify(err));
    }
  }, function(err) {
    console.log('auth failure', err);
    res.send(JSON.stringify(err));
  });
  
});

module.exports = router;
