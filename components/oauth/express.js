/**
 * Created by Manjesh on 14-05-2016.
 */

var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var config = require('../../config')

var oauth = require('./oauth')

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
        return res.json({token:token,redirect_uri:request.body.redirect_uri })
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