module.exports = function(sequelize, DataTypes) {
  //sends back a function with sequelize and DataTypes parameters

  var User = sequelize.define("Users", {
    //sequelize.define creates a sequelize model class
    //1st param name of class
    username: DataTypes.STRING
    //name of column
  }, {
    //2nd param properties of class/model
    //id , created_at, updated_at auto-generated
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Tasks);
        //defines relationship
      }
      //3rd param options object
      // define anything extra on an object
    }
  });
  return User;
};