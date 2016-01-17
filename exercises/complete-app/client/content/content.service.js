angular.module("gifjoy")
.factory("Content", function(
  $resource
) {
  "use strict";

  return $resource("/api/uploads");

});
