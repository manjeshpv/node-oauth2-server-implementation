'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    username: DataTypes.STRING(32),
    password: DataTypes.STRING(32),
    cropId: {
      type: DataTypes.INTEGER(11),
      field: 'crop_id',
    },
    scope: DataTypes.STRING,
  }, {
    tableName: 'users', // oauth_users
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function associate (models) {
        // User.hasMany(models.OAuthClient);
      },
    },
  });

  return User;
};
