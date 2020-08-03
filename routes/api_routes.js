var db = require("../models");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    db.Pet.find({}).then(function(result) {
      res.json(result);
    });
  });
};