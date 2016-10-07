/**
 * Modified by Rick Fox on 12-09-2016.
 */
var _ = require('lodash');
var sqldb = require('./sqldb');
var Sequelize = require('sequelize')
var User = sqldb.User;
var Sessions = sqldb.Session;
var OAuthAccessToken = sqldb.OAuthAccessToken;


function getSessionUsers(session_id) {
  return Sessions
    .findAll({
      //attributes: ['user_id'],
      where: {session_id: session_id, is_deleted: 0},
      include: [{
        model: User,
        attributes: ['firstname', 'lastname', 'username', 'email', 'id', 'image_url']
      },
      {
        model: OAuthAccessToken,
        attributes: ['access_token', 'expires', 'scope'],
      }
      ]
    })
    .then(function (savedRT) {
     return savedRT

    }).catch(function (err) {
      console.log("getUser - Err: ", err)
    });
}
function removeSessionUser(session_id, id) {
  return Sessions
    .update({ 
      is_deleted: 1
    },
    { 
      fields: ['is_deleted'],
      where: {user_id: id, session_id: session_id}
    })
    .then(function (savedRT) {
     return savedRT

    }).catch(function (err) {
      console.log("getUser - Err: ", err)
    });
}
function updateUserSessionToken(record_id, token) {
  return OAuthAccessToken
    .findOne({
      where:{access_token:token}
    }).then(function (savedRT) {
      console.log("#####################-2")
      console.log(savedRT)
      console.log(savedRT.id)
      console.log("#####################-2")
      Sessions
        .update({ 
          token_id: savedRT.id,
          is_deleted: 0
        },
        { 
          fields: ['token_id'],
          where:{id: record_id}
        })
        .then(function (savedRT) {
          return savedRT

        }).catch(function (err) {
         console.log("getUser - Err: ", err)
        });

    }).catch(function (err) {
     console.log("getUser - Err: ", err)
    });
  

}
function addSessionUser(session_id, user_id) {
  //console.log(Sessions)
  return Sessions
    .findOrCreate({
      where: {
        session_id : session_id,
        user_id: user_id, 
        is_deleted: 0
      },
      defaults: {
        session_id : session_id,
        user_id: user_id, 
        is_deleted: 0
      }
    })
    .then(function (savedRT) {
      return savedRT;

    }).catch(function (err) {
      console.log("getUser - Err: ", err)
    });
}


module.exports = {
  getSessionUsers: getSessionUsers,
  removeSessionUser: removeSessionUser,
  addSessionUser: addSessionUser,
  updateUserSessionToken: updateUserSessionToken
}