module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("artist", {
    name: Sequelize.STRING,
    photoUrl: Sequelize.STRING,
    nationality: Sequelize.STRING,
    instrument: Sequelize.STRING,
    home_address: Sequelize.STRING
  });
  return model;
};