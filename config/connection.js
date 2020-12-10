// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password
if(process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL)

} else {
var sequelize = new Sequelize("database_development", "root", null, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}
// Exports the connection for other files to use
module.exports = sequelize;

