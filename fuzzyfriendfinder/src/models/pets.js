const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petsSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  pet_type: {
    type: String
  },
  breed: {
    type: String
  },
  status: {
    type: String
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  size: {
    type: String
  },
  good_with_dogs: {
    type: Boolean
  },
  good_with_cats: {
    type: Boolean
  },
  good_with_kids: {
    type: Boolean
  },
  indoor_or_outdoor: {
    type: String
  },
  housetrained: {
      type: Boolean
  },
  description: {
      type: String
  },
  date_surrendered: {
    type: Date
  },
  date_adopted: {
    type: Date
  },
  date_deceased: {
    type: Date
  },
  notes: {
    type: Date
  }
});

const Pets = mongoose.model("Pets", petsSchema);

module.exports = Pets;