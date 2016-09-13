/**
 * Modified by Rick Fox on 12-09-2016.
 */
var _ = require('lodash');
var sqldb = require('./sqldb');
var Client = sqldb.OAuthClient;
var User = sqldb.User;


function registerClient(model) {
  return OAuthClient
    .create({
      name: model.name,
      client_id: model.client_id,
      client_secret: model.client_secret,
      redirect_uri: model.redirect_uri,
      grant_types: model.grant_types,
      scope: model.scope
    })
    .then(function (data) {
      
      return data
    }).catch(function (err) {
      console.log("saveNewClient - Err: ", err)
    });
}
function registerUser(model) {
  return User
    .create({
      username: model.username,
      firstname: model.firstname,
      lastname: model.lastname,
      password: model.password,
      phone: model.phone,
      lang: model.lang,
      gender: model.gender,
      email: model.email,
      scope: model.scope
    })
    .then(function (data) {
      
      return data
    }).catch(function (err) {
      console.log("saveRegistrationUser - Err: ", err)
    });
}

modules.export = {

}