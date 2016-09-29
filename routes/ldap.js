var express = require('express');
var router = express.Router();


var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var ldap = require('../utilities/ldap')
var oauth = require('../components/oauth/oauth')


router.post('/authenticate', function(req, res, next) {
  console.log("authenticate")
  var bod = req.body;
  var ldapAuth = new ldap().auth;
  console.log(bod)
  ldapAuth(bod.username, bod.password).then(function(result) {
    console.log('auth success', result);
    if (result.error === false) {
      var ldapReq = req;
      ldapReq.ldapUser = result.data;
      console.log(ldapReq.ldapUser)
      var request = new Request(ldapReq);
      var response = new Response(res);

       oauth
      .token(request, response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        return res.json({token:token,redirect_uri:request.body.redirect_uri });
      }).catch(function(err) {
        console.log(err)
        return res.status(500).json(err)
      })






      // res.status('200')


      // res.send(JSON.stringify(result));
    } else {
      res.send(JSON.stringify(err));
    }
  }, function(err) {
    console.log('auth failure', err);
    res.send(JSON.stringify(err));
  });
  
});

module.exports = router;
