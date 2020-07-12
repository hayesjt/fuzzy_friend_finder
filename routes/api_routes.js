var db = require("../models");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    db.Pets.find({}).then(function(result) {
      res.json(result);
    });
  });

//    KK: The following code is from the workout tracker assignment - leaving here as reference for other types of routes we will need in the future
//     app.put("/api/pets/:id", function(req, res) {
//     var newExercise = req.body
//     db.Pets.updateOne({ _id: req.params.id }, { $push: { exercises: newExercise } }).then(function(result) {
//       return res.json(result);
//     });
//   });

//   app.get("/api/pets/range", function(req, res) {
//     db.Pets.find({}).then(function(result) {
//         res.json(result);
//     });
// });
  
//   app.post("/api/pets/", function(req, res) {
//     db.Pets.create({
//       day: new Date().setDate(new Date().getDate()),
//       exercises: []
//     }).then(function(result) {
//       res.json(result);
//     });
//   })
  
};