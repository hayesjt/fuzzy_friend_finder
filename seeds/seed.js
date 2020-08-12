let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("process.env.MONGODB_URI || mongodb://localhost:27017/fuzzy_friend_finder", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let petSeed = [
  {
    name: "Mr. Fuzzy",
      pet_type: "Dog",
      breed: "Husky",
      status: "Available",
      age: 2,
      sex: "Female",
      size: "70 lbs",
      good_with_dogs: false,
      good_with_cats: false,
      good_with_kids: true,
      indoor_or_outdoor: "both",
      housetrained: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date_surrendered: 7/12/2020,
      date_adopted: null,
      date_deceased: null,
      notes: "Needs medication 7/15/2020",
      attention: null,
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg"
  },
  {
    name: "Missy",
      pet_type: "Dog",
      breed: "Lab",
      status: "Available",
      age: 8,
      sex: "Female",
      size: "81 lbs",
      good_with_dogs: true,
      good_with_cats: true,
      good_with_kids: true,
      indoor_or_outdoor: "both",
      housetrained: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date_surrendered: 7/12/2020,
      date_adopted: null,
      date_deceased: null,
      notes: null,
      attention: null,
      image: "https://t7-live-ahsd8.nyc3.cdn.digitaloceanspaces.com/animalhumanesociety.org/files/styles/animal_450x330/flypub/adoption/images/large/2020/07/06/54458aa8-5287-4343-a1aa-338a33179b0e.jpg?h=8a14a818&itok=9C8ar-sLg"
  },
  {
    name: "Oreo",
      pet_type: "Dog",
      breed: "Terrier, Pit Bull / Bulldog, English",
      status: "Available",
      age: 1.3,
      sex: "Male",
      size: "60 lbs",
      good_with_dogs: false,
      good_with_cats: false,
      good_with_kids: false,
      indoor_or_outdoor: "both",
      housetrained: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date_surrendered: 7/12/2020,
      date_adopted: null,
      date_deceased: null,
      notes: null,
      attention: null,
      image: "https://t7-live-ahsd8.nyc3.cdn.digitaloceanspaces.com/animalhumanesociety.org/files/styles/animal_450x330/flypub/adoption/images/large/2020/07/09/db84851e-2980-493a-ab9f-d232c545074b.jpg?h=8a14a818&itok=ouccgsDi"
  }
];

db.Pet.deleteMany({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });