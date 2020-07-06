const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
// var db = require ("./models");
const path = require('path')
// Add apiRoute when created
// const apiRoute = require("./controllers/chores_controller")
var mongoose = require("mongoose");

require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(apiRoute)

// KK: Wondering if we need to link public folder here? 

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  // Mongoose connection
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
  });
  
  
  app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
  });