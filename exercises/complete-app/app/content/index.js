"use strict";

var express = require("express");
var content = require("./content");
var fs = require("fs");
var multiparty = require("multiparty");

exports.routes = function() {
  var app = new express.Router;

  // show content pages - localhost:3000/c/
  app.get("/c/:id", function(req, res, next) {
    content.get(req.params.id, function(err, content) {
      if(err) {
        next(err);
      } else {
        res.render("show", {
          content: content 
        });
      }
    });
  });

  app.get("/c/show/:id", function(req, res, next) {
    content.get(req.params.id, function(err, content) {
      if(err) {
        next(err);
      } else {
        res.set('Content-Type', content.type);
        res.send(content.content.buffer);
      }
    });
  });

  // display the SPA for content creators
  app.get("/create*", function(req, res, next) {
    res.render("app", { content: getSpaIndex() });
  });

  app.post("/api/uploads", parseForm, function(req, res, next) {
    var file = req.files.content[0];

    content.create({
      type: file.headers['content-type'],
      path: file.path
    }, req.params, 
      errorOrSend(res, next));
  });

  app.get("/api/uploads", function(req, res, next) {
    content.all(errorOrSend(res, next));
  });

  function parseForm(req, res, next) {
    var form = new multiparty.Form();
    
    form.parse(req, function(err, fields, files) {
      req.files = files;
      req.body = fields;
      next();
    });
  }

  return app;
}

function errorOrSend(res, next) {
  return function(err, content) {
    err ? next(err) : res.send(content);
  }
}

function getSpaIndex() {
  if(process.env.NODE_ENV === "production" && getSpaIndex.cached) {
    return getSpaIndex.cached;
  }

  var spaIndex = fs.readFileSync(__dirname + "/../../client/index.html", { encoding: "utf8" });
  getSpaIndex.cached = spaIndex;
  return spaIndex;
}
