/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/
var config = require('./../../../config')
var Sequelize = require('sequelize');

var db = {
  sequelize: new Sequelize(
    config.sql.database,
    config.sql.username,
    config.sql.password,
    config.sql
  )
};

db.OAuthAccessToken = db.sequelize.import('./OAuthAccessToken');
db.OAuthAuthorizationCode = db.sequelize.import('./OAuthAuthorizationCode');
db.OAuthClient = db.sequelize.import('./OAuthClient');
db.OAuthRefreshToken = db.sequelize.import('./OAuthRefreshToken');
db.OAuthScope = db.sequelize.import('./OAuthScope');
db.User = db.sequelize.import('./User');
db.Thing = db.sequelize.import('./Thing');

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;