"use strict";

var serveStatic = require('serve-static');
var express = require("express");

exports.routes = function(app) {
  var app = new express.Router();

  // serve CSS, JS etc from ./public
  serveStaticUnder("/", __dirname + "/../../public", { index: false });
  serveStaticUnder("/lib", __dirname + "/../../../../node_modules", { index: false });
  // templates only
  serveStaticUnder("/", __dirname + "/../../client", { index: false });

  return app;

  function serveStaticUnder(path, dir, options) {
    var contentServer = express.Router();
    contentServer.use(serveStatic(dir, options));

    app.use(path, contentServer);
  }
}


