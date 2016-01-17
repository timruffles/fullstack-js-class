"use strict";

var express = require("express");

exports.routes = function() {
  var app = new express.Router;

  // handling the home page - localhost:3000/
  app.get("/", function(req, res, next) {
    res.render("index");
  });
  
  return app;
};



