module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    routeName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    bootcamp_name: DataTypes.STRING,
    date_range: DataTypes.STRING,
    location: DataTypes.STRING,
    employed: DataTypes.STRING,
    title: DataTypes.STRING,
    salary: DataTypes.STRING
  });
  return User;
};
