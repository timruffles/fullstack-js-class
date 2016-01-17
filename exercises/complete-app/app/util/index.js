"use strict";

var fs = require("fs");
var execSync = require("child_process").execSync;

exports.glob = function(glob) {
  return execSync('ls ' + glob, { encoding: "utf8" })
    .split("\n")
    .filter((s) => { return s.length > 0 });
}

