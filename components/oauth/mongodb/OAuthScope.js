/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var OAuthScopeSchema = new Schema({
  scope:  String,
  is_default: Boolean
});

module.exports = mongoose.model('OAuthScope', OAuthScopeSchema);
