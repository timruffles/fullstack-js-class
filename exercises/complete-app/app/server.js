/**
 * the application server
 *
 * if run directly, starts the server listening for requests. if required, the express server is exported
 */
"use strict";
`requires es6 compatible node`;

// our dependencies
var express = require("express");
var util = require("./util");


// constants
var PORT = 3000;


// create the express application
var app = express();


// we're using http://jade-lang.com/ templates
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// load in all our application code
var modules = util.glob(__dirname + '/*/index.js')
  .map(require)
  .filter((m) => typeof m.routes === "function" )
                                       
modules.forEach((m) => app.use(m.routes()) )


// either start the serve if this JS file is being executed,
// or export it for use in tests etc
if(require.main === module) {
  app.listen(PORT, function() {
   console.log("listening on %d", PORT);
  });
} else {
  module.exports = app;
}

