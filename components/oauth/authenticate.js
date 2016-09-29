/**
 * Created by Manjesh on 14-05-2016.
 * Modified by Rick Fox on 12-09-2016.
 */

var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var db = require('./sqldb')
var config = require('../../config');
// Optionally use Mongo Db
if (config.db === 'mongo') {
  db = require('./mongodb')
}

var oauth = require('./oauth')

module.exports = function(options) {
  var options = options || {};
  return function(req, res, next) {
    var request = new Request({
      headers: { authorization: req.headers.authorization },
      method: req.method,
      query: req.query,
      body: req.body
    });
    var response = new Response(res);

    oauth.authenticate(request, response, options)
      .then(function(token) {
        // Request is authorized.
        req.user = token
        next()
      })
      .catch(function(err) {
        console.log(err)
        // Request is not authorized.
        // should this redirect the user to login?
        // Possibly redirect to authorize modal?
        res.status(err.code || 500).json(err)
      });
  }
}