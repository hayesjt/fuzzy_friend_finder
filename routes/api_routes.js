var Pets = require("../models/pets.js");
var express = require("express")
var router = express.Router()

///////////////////////////////////////////GET ROUTES////////////////////////////////////////////////
    // GET (show all transactions)
    router.route("/api/pets/").get( function (req, res) {
        Pets.findAll({})
            .then(function (dbPets) {
                res.json(dbPets);
            })
    });

module.exports = router;