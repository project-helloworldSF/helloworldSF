module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
      comment: DataTypes.STRING,
      f_key: DataTypes.STRING
    });
    return Comments;
  };