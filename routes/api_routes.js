var Pets = require("../models/pets.js");
var express = require("express")
var router = express.Router()

///////////////////////////////////////////GET ROUTES////////////////////////////////////////////////
    router.route("/api/pets/").get( function (req, res) {
        Pets.findAll({})
            .then(function (dbPets) {
                res.json(dbPets);
            })
    });

    router.route("/api/:pets_id").get( function (req, res) {
        Pets.findAll({where: {pets_id: req.params.pets_id}}).then(function (dbPets) {
            res.json(dbPets);
        })
    });

module.exports = router;

// app.get("/api/progresses/:id", function (req, res) {
//     db.Progress.findAll({
//       where: {
//         userId: req.params.id
//       }
//     }).then(function (result) {
//       res.json(result);
//     });
//   });
