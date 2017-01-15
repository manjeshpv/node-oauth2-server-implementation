/**
 * Created by Manjesh on 15-05-2016.
 */
'use strict';

let OauthServer = require('oauth2-server');
let config = require('config');

let oauth = new OauthServer({
  model: config.get('db') === 'mongo' ? require('./mongo-models.js') : require('./models.js'),
  accessTokenLifetime: config.get('accessTokenLifetime') || 3600,
  refreshTokenLifetime: config.get('refreshTokenLifetime') || 1209600,
});

module.exports = oauth;
