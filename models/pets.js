var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var Pets = sequelize.define("Pets", {
    pets_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    pet_type: Sequelize.STRING,
    breed: Sequelize.STRING,
    status: Sequelize.STRING,
    age: Sequelize.STRING,
    size: Sequelize.STRING,
    good_with_dogs: Sequelize.BOOLEAN,
    good_with_cats: Sequelize.BOOLEAN,
    good_with_kids: Sequelize.BOOLEAN,
    indoor_or_outdoor: Sequelize.STRING,
    housetrained: Sequelize.BOOLEAN,
    description: Sequelize.STRING,
    date_surrendered: Sequelize.DATEONLY,
    date_adopted: Sequelize.DATEONLY,
    date_deceased: Sequelize.DATEONLY,
    notes: Sequelize.STRING,
    attention: Sequelize.STRING,
    image: Sequelize.STRING
}, {
        timestamps: false
    }
);

Pets.sync();

module.exports = Pets;
