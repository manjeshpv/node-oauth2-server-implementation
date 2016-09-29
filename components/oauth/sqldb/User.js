/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  console.log(DataTypes)
  var User = sequelize.define('User',  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    username: DataTypes.STRING(32),
    firstname: DataTypes.STRING(32),
    lastname: DataTypes.STRING(32),
    password: DataTypes.STRING(32),
    phone: DataTypes.STRING(32),
    lang: DataTypes.STRING(32),
    gender: DataTypes.INTEGER(1),
    email: DataTypes.STRING(100),
    birthdate: DataTypes.DATE,
    scope: DataTypes.STRING
  }, {
    tableName: 'users', // oauth_users
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {
        //User.hasMany(models.OAuthClient);
      },
    },
  });

  return User;
}

