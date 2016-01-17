/**
 * implements persistence for content
 */
"use strict";

var db = require("../db");
var content = db.get("content");
var fs = require("fs");
var mongo = require("mongodb");

exports.get = function(id, cb) {
  content.findById(id, function(err, found) {
    if(err || !found) {
      cb(err || new Error("notFound"));
    } else {
      cb(null, found);
    }
  });
}

exports.create = function(file, fields, cb) {
  fs.readFile(file.path, function(err, buffer) {
    if(err) {
      cb(err);
    } else {
      insert(buffer);
    }
  });

  function insert(buffer) {
    content.insert({
      type: file.type,
      content: buffer,
    }, inserted);
  }

  function inserted(err, record) {
    if(err) {
      cb(err);
    } else {
      cb(null, {
        _id: record._id,
      });
    }
  }
};

exports.all = function(cb) {
  content.find({}, cb); 
};
