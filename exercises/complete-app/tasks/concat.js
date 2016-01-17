#!/usr/bin/env node


var Concat = require("concat-with-sourcemaps");
var util = require("../app/util");
var fs = require("fs")

var sourceMapPath = "/dist.js.map";
var sourceMapComment = "\n//# sourceMappingURL=" + sourceMapPath + "\n";

var concat = new Concat(true /* defaults to not making sourcemaps *facepalm* */, sourceMapPath);
var clientDir = __dirname + "/../client";

var files = [clientDir + "/boot.js"]
  .concat(util.glob(clientDir + "/*/*.js"));

files.forEach(function(f) {
  var content = fs.readFileSync(f, { encoding: "utf8" });
  f = f.replace(clientDir, "");
  concat.add(f, content);
});

fs.writeFileSync(__dirname + "/../public/dist.js", concat.content + sourceMapComment);
fs.writeFileSync(__dirname + "/../public/dist.js.map", concat.sourceMap);

