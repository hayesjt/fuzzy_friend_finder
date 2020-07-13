var db = require("../models");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    db.Pets.find({}).then(function(result) {
      res.json(result);
    });
  });
};