/**
 * Created by Manjesh on 14-05-2016.
 */

var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var config = require('../../config');

var oauth = require('./oauth')
var session = require('./session')

module.exports = function(app) {
  app.options('/oauth/token',function(req,res){
    res.status(200).send(200);
  });
  app.all('/oauth/token', function(req, res, next) {
    var request = new Request(req);
    var response = new Response(res);
    //console.log(request)
    oauth
      .token(request, response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        console.log('Check/Set cookies');
        if (request.body.grant_type === 'password') {
          var cookie = req.cookies[config.session.cookieName];
          if (cookie === undefined)
          {
            // no: set a new cookie
            console.log('use JWT with session inside it.. to help prevent attacks');
            var randomNumber=Math.random().toString();
            randomNumber=randomNumber.substring(2,randomNumber.length);
            res.cookie(config.session.cookieName,randomNumber, { maxAge: 900000, httpOnly: true, expires: 0, domain: config.session.cookieDomain });
            cookie = randomNumber;
          } 
          else
          {
            // yes, cookie was already present 
            res.cookie(config.session.cookieName,cookie, { maxAge: 900000, httpOnly: true, expires: 0, domain: config.session.cookieDomain });
            // console.log('cookie exists', cookie);
          } 
        }
         
        session.addSessionUser(cookie, token.user.id).then(function(data){
          console.log("#####################")
          console.log(data);
          console.log(data[0]);
           console.log(data[0].id);
          console.log("#####################")
          session.updateUserSessionToken(data[0].id,token.access_token).then(function(ret){
            console.log("#####################")
            console.log(ret)
            console.log("#####################")

            return res.json({token:token,redirect_uri:request.body.redirect_uri, cookie })
          })
        })
        
        // var uri = token.client.redirectUris[0];
        // if(!uri) {
        //   uri="/my-account" // Default redirect url
        // }
        // var access_token = token.access_token;
        // res.send({uri:uri,access_token:access_token, token:token})

      }).catch(function(err) {
        console.log(err)
        return res.status(500).json(err)
      })
  });

  app.post('/authorize', function(req, res) {
    var request = new Request(req);
    var response = new Response(res);
    return oauth.authorize(request, response).then(function(success) {
      //  if (req.body.allow !== 'true') return callback(null, false);
      //  return callback(null, true, req.user);
      res.json(success)
    }).catch(function(err) {
      res.status(err.code || 500).json(err)
    })
  });

  // app.get('/authorize', function(req, res) {
  //   var request = new Request(req);
  //   var response = new Response(res);

  //   return oauth.authorize(request, response).then(function(success) {
  //     if (!success) return res.status(404).json({ error: 'Invalid Client' });
  //     res.json(success)
  //   }).catch(function(err) {
  //     res.status(err.code || 500).json(err)
  //   })
    // return db.OAuthClient.findOne({
    //     where: {
    //       client_id: req.query.client_id,
    //       redirect_uri: req.query.redirect_uri,
    //     },
    //     attributes: ['id', 'name'],
    //   })
    //   .then(function(model) {
    //     if (!model) return res.status(404).json({ error: 'Invalid Client' });
    //     return res.json(model);
    //   }).catch(function(err) {
    //     return res.status(err.code || 500).json(err)
    //   });
  //});
  
}