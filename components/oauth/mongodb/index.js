/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/
var config = require('./../../../config')
var mongoose = require('mongoose');
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, function(err) {
  if (err) return console.log(err);
  console.log('Mongoose Connected');
});
var db ={};
db.OAuthAccessToken = require('./OAuthAccessToken')
db.OAuthAuthorizationCode = require('./OAuthAuthorizationCode')
db.OAuthClient = require('./OAuthClient')
db.OAuthRefreshToken = require('./OAuthRefreshToken')
db.OAuthScope = require('./OAuthScope')
db.User = require('./User')
db.Thing = require('./Thing')

module.exports = db;