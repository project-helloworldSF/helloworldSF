// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/bootcamp", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bootcamp.html"));
  });

  app.get("/bootcampers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userDisplay.html"));
  });

};
