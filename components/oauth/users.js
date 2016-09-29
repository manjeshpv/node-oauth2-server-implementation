/**
 * Modified by Rick Fox on 12-09-2016.
 */
var _ = require('lodash');
var sqldb = require('./sqldb');
var Client = sqldb.OAuthClient;
var User = sqldb.User;


function getUser(id) {
  return User
    .findOne({
      attributes: ['id', 'username', 'firstname', 'lastname', 'phone', 'gender', 'lang', 'email', 'birthdate', 'timezone'],
      where: {id: id}
    })
    .then(function (savedRT) {
     return savedRT

    }).catch(function (err) {
      console.log("getUser - Err: ", err)
    });
}


module.exports = {
  getUser: getUser
}