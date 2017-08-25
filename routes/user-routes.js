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

  app.get("/api/users", function(req, res) {
      db.User.findAll({}).then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser);
      });
  });

  app.post("/api/users", function(req, res) {

    db.User.create({
      username: req.body.username,
      password: req.body.password,
      profile_pic: req.body.profile_pic,
      age: req.body.age,
      gender: req.body.gender,
      ethnicity: req.body.ethnicity,
      bootcamp_name: req.body.bootcamp_name,
      date_range: req.body.date_range,
      location: req.body.location,
      employed: req.body.employed,
      title: req.body.title,
      salary: req.body.salary
    }).then(function(dbUser) {

      res.redirect("/");
    });
    
  });
};