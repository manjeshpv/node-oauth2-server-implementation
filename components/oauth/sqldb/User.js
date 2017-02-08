'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    username: DataTypes.STRING(20),
    password: DataTypes.STRING(20),
    companyId: {
      type: DataTypes.STRING(40),
      field: 'company_id',
    },
    scope: DataTypes.STRING,
  }, {
    tableName: 't_company_user', // oauth_users
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function associate (models) {
      },
    },
  });

  return User;
};
