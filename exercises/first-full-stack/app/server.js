"use strict";

var express = require("express");
var serveStatic = require("serve-static");

var PORT = 3000;
var PUBLIC_DIR = __dirname + "/../public";

var app = express();

//
// EXERCISE START
//


// our data
var count = 0;


app.get("/api/counter", function(request, response) {
  // TODO read each part of the above line, consider what's happening
  // TODO spot the part that would live in a browser's URL bar - what does this tell us about HTTP and its relations to file systems?

  // TODO reply with an object like
  //
  //   {  count: count }
  //
  // Try a few methods that come to mind for sending a response,
  //
  // If you get stuck - find out which method to use on http://expressjs.com/
});  

// TODO listen for a 'POST' to a similar route,
// TODO increment the count in the handler
// TODO reply with an indentical format of message


//
// EXERCISE END
// 





// this serves up our static content
app.use(serveStatic(PUBLIC_DIR));

// actually start listening to incoming requests
app.listen(PORT, function() {
 console.log("listening on %d", PORT);
});
