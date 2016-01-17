/**
 * generic filters - not specific to a feature
 */
!(function() {
"use strict";

angular.module('gifjoy')
.filter("loadedAndEmpty", function() {
  return function(x) {
    return x && x.$resolved && x.length === 0;
  }
})
.filter("hasLoadedItems", function() {
  return function(x) {
    return x && x.$resolved && x.length > 0;
  }
});




})();

