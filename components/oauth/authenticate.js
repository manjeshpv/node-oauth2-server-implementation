/**
 * Created by Manjesh on 14-05-2016.
 */

var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var db = require('./sqldb')
var config = require('../../config');
if(config.db === 'mongo'){
  db = require('./mongodb')
}
var oauth = require('./oauth')

module.exports = function(options){
  var options = options || {};
  return function(req, res, next) {
    var request = new Request({
      headers: {authorization: req.headers.authorization},
      method: req.method,
      query: req.query,
      body: req.body
    });
    var response = new Response(res);

    oauth.authenticate(request, response,options)
      .then(function (data) {
        // Request is authorized.
        // Todo: Temporary for req.user or req.session
        var bearer = req.headers.authorization.replace('Bearer','').replace('bearer','').trim()
        if(config.db==='mongo'){
          return db.OAuthAccessToken.findOne({ access_token: bearer})
            .populate('User')
            .then(function(aT){
            req.user = aT ? aT.User : {};
            next()
          }).catch(function(err){
            console.log("Error while getting session",err)
            req.user = null
            next()
          })
        }
        return db.OAuthAccessToken.findOne({
          include: [{
            model:db.User,
            attributes: ['id','username']
          }],
          where: { access_token: bearer}
        }).then(function(aT){
          req.user = aT ? aT.User.toJSON() : {};
          next()
        }).catch(function(err){
          console.log("Error while getting session",err)
          req.user = null
          next()
        })

      })
      .catch(function (err) {
        // Request is not authorized.
        res.status(err.code || 500).json(err)
      });
  }
}
