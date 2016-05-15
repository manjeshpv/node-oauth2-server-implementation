/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var OAuthClientSchema = new Schema({
  name:  String,
  client_id:  String,
  client_secret: String,
  redirect_uri: String,
  grant_types: String,
  scope: String,
  User:  { type : Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('OAuthClient', OAuthClientSchema);

