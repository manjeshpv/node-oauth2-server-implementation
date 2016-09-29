var express = require('express');
var router = express.Router();
var url = require('url');
var register = require('../components/oauth/register')


router.post('/client-registration', function(req, res, next) {
  var bod = req.body;
  // var username = "blerpit";
  // var password = "blerpitsecret";
  //var appsecret = "appsecret"
 // console.log('TODO: SAVE this DATA to the DB')

  var mod = {
  	name: bod.name,
    client_id: makeid(4)+"-"+makeid(4)+"-"+makeid(4),
    client_secret: makeid(35),
    redirect_uri: bod.redirect_uri,
    grant_types: 'password',
    scope: 'profile'
  }
  register.registerClient(mod).then(function(data, err){
  	console.log(data);
  	var appPublid = 'Basic ' + new Buffer(mod.client_id + ':' + mod.client_secret).toString('base64');
  	res.render('new-client-registration-success', { title: 'BlerpIt Oauth 2.0 Client Registration', client_id: mod.client_id, app_url:mod.redirect_uri, client_private:mod.client_secret, client_public: appPublid});
  })
  
});

function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = router;