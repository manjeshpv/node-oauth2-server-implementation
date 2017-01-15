'use strict';

let oauthServer = require('oauth2-server');
let config = require('config');
let Request = oauthServer.Request;
let Response = oauthServer.Response;
let db = config.get('db') === 'mongo' ? require('./mongodb') : require('./sqldb');

let oauth = require('./oauth');

module.exports = function (app) {
  app.all('/oauth/token', function (req, res, next) {
    let request = new Request(req);
    let response = new Response(res);

    oauth
      .token(request, response)
      .then(function (token) {
        // Todo: remove unnecessary values in response
        return res.json(token);
      })
      .catch(function (err) {
        return res.status(500).json(err);
      });
  });

  app.post('/authorise', function (req, res) {
    let request = new Request(req);
    let response = new Response(res);

    return oauth.authorize(request, response).then(function (success) {
      //  if (req.body.allow !== 'true') return callback(null, false);
      //  return callback(null, true, req.user);
      res.json(success);
    }).catch(function (err) {
      res.status(err.code || 500).json(err);
    });
  });

  app.get('/authorise', function (req, res) {
    return db.OAuthClient.findOne({
      where: {
        client_id: req.query.client_id,
        redirect_uri: req.query.redirect_uri,
      },
      attributes: ['id', 'name'],
    })
      .then(function (model) {
        if (!model) return res.status(404).json({error: 'Invalid Client'});
        return res.json(model);
      }).catch(function (err) {
        return res.status(err.code || 500).json(err);
      });
  });
};
