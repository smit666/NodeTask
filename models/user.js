'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email:DataTypes.STRING,
    mobileNumber:DataTypes.INTEGER,
    departmentId:DataTypes.INTEGER,
    countryId:DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};