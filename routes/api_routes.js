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

module.exports = router;