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
    db.Bootcamp.findAll({}).then(function(bootcamps){
      res.json(bootcamps);
    });
  });

  app.get("/api/comments", function(req, res) {
    db.Comments.findAll({}).then(function(comments){
      res.json(comments);
    });
  });

  app.post("/api/comments", function(req, res) {
    
        db.Comments.create({
          comment: req.body.comment,
          f_key: req.body.f_key,
          createdAt: req.body.createdAt,
          updatedAt: req.body.updatedAt
        }).then(function(comments) {
          res.redirect("/bootcamps");
        });
        
      });
  
};
