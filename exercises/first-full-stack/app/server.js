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



app.get("/api/counter", function(req, res) {
  res.send({  count: count });
});

app.post("/api/counter", function(req, res) {
  count += 1;
  res.send({  count: count });
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
