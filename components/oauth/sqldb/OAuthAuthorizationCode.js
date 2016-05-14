/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';

const moment = require('moment');

module.exports = function AuthCodeModel(sequelize, DataTypes) {
  const OAuthAuthorizationCode = sequelize.define('OAuthAuthorizationCode', {
    id: {
      type: DataTypes.INTEGER(14),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    authorization_code : DataTypes.STRING(256),
    expires: DataTypes.DATE,
    redirect_uri: DataTypes.STRING(2000),
    scope: DataTypes.STRING
  }, {
    tableName: 'oauth_authorization_codes',
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {
        OAuthAuthorizationCode.belongsTo(models.OAuthClient, {
          foreignKey: 'client_id',
        });

        OAuthAuthorizationCode.belongsTo(models.User, {
          foreignKey: 'user_id',
        });
      },
    },
  });

  return OAuthAuthorizationCode;
};
