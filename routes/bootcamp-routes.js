// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/bootcamp", function(req, res) {
// Grabbing all the data from database
    db.Bootcamp.findAll({}).then(function(bootcamps){
      // console.log(bootcamps);
      res.json(bootcamps);
    });
  });
  
};
