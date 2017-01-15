'use strict';

let oauthServer = require('oauth2-server');
// let config = require('config');
// let db = require('./sqldb');
// if (config.get('db') === 'mongo') {
//   db = require('./mongodb');
// }
let Request = oauthServer.Request;
let Response = oauthServer.Response;

let oauth = require('./oauth');

module.exports = function (options) {
  options = options || {};
  return function (req, res, next) {
    let request = new Request({
      headers: {authorization: req.headers.authorization},
      method: req.method,
      query: req.query,
      body: req.body,
    });
    let response = new Response(res);
    oauth.authenticate(request, response, options)
      .then(function (token) {
        // Request is authorized.
        req.user = token;
        next();
      })
      .catch(function (err) {
        // Request is not authorized.
        res.status(err.code || 500).json(err);
      });
  };
};
