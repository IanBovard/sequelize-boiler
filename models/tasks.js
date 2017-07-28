module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.Users);
        //models.Users -- first param name
      }
    }
  });

  return Task;
};