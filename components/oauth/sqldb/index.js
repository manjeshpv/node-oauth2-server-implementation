'use strict';

let config = require('config');
let Sequelize = require('sequelize');

let db = {
  sequelize: new Sequelize(
    config.get('sql.database'),
    config.get('sql.username'),
    config.get('sql.password'),
    config.get('sql')
  ),
};

db.OAuthAccessToken = db.sequelize.import('./OAuthAccessToken');
db.OAuthAuthorizationCode = db.sequelize.import('./OAuthAuthorizationCode');
db.OAuthClient = db.sequelize.import('./OAuthClient');
db.OAuthRefreshToken = db.sequelize.import('./OAuthRefreshToken');
db.OAuthScope = db.sequelize.import('./OAuthScope');
db.User = db.sequelize.import('./User');
db.Thing = db.sequelize.import('./Thing');

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
