/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  //console.log(DataTypes)
  var Session = sequelize.define('Session',  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    session_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER(11),
    token_id: DataTypes.INTEGER(14),
    is_deleted: DataTypes.INTEGER(1)
  }, {
    tableName: 'oauth_sessions', // oauth_sessions
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function associate(models) {
        Session.belongsTo(models.User, {
          foreignKey: 'user_id',
        });
        Session.belongsTo(models.OAuthAccessToken, {
          foreignKey: 'token_id',
        });
      },
    },
  });

  return Session;
}

