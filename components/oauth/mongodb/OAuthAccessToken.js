/**
 * Created by Manjesh on 14-05-2016.
 */

'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var OAuthAccessTokenSchema = new Schema({
  access_token: String,
  expires: Date,
  scope:  String,
  User:  { type : Schema.Types.ObjectId, ref: 'User' },
  OAuthClient: { type : Schema.Types.ObjectId, ref: 'OAuthClient' },
});

module.exports = mongoose.model('OAuthAccessToken', OAuthAccessTokenSchema);
