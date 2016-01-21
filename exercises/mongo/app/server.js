"use strict";

var express = require("express");
var serveStatic = require("serve-static");
var json = require("body-parser").json;
var debug = require('debug')('app')

var PORT = 3000;
var PUBLIC_DIR = __dirname + "/../public";

var app = express();
app.use(json());

var db = require("monk")("localhost/fullstack-js-first");

//
// EXERCISE START
//


// our data
var count = 0;


var qs = db.get("questions");

app.get("/api/question", function(req, res, next) {
  // TODO handle retreiving
});

app.post("/api/question", function(req, res, next) {
  // TODO handle creation
});

app.delete("/api/question/:id", function(req, res, next) {
  // TODO handle delete
});


//
// EXERCISE END
// 





// this serves up our static content
app.use(serveStatic(PUBLIC_DIR));

// actually start listening to incoming requests
app.listen(PORT, function() {
 console.log("listening on %d", PORT);
});
