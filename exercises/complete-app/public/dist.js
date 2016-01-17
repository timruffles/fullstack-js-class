angular.module("gifjoy", [
  "ngRoute",
  "ngResource",
  "ngFileUpload",
])
.config(function($locationProvider) {

  $locationProvider.html5Mode(true);
  
});
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

angular.module("gifjoy")
.factory("Content", function(
  $resource
) {
  "use strict";

  return $resource("/api/uploads");

});
angular.module("gifjoy")
.directive('listUploaded', function(Content) {
  return {
    restrict: "E",
    bindToController: true,
    controllerAs: "ctrl",
    templateUrl: "upload/list-uploaded.html",
    controller: function() {
      this.uploads = Content.query();
    },
  };
});
angular.module("gifjoy")
.config(function($routeProvider) {

  $routeProvider
  .when("/create", {
    template: "<list-uploaded></list-uploaded>",
  })
  .when("/create/new", {
    template: "<upload></upload>",
  })
  
});
angular.module("gifjoy")
.directive("upload", function(Upload, $exceptionHandler, $window) {
  "use strict";

  return {
    restrict: "E",
    bindToController: true,
    controllerAs: "ctrl",
    templateUrl: "upload/upload.html",
    controller: function() {

      var self = this;

      self.upload = {};

      self.submit = function() {
        Upload.upload({
          url: "/api/uploads",
          data: {
            content: self.upload.content,
          },
        })
        .then(function(res) {
          var id = res.data._id;

          $window.location.href = "/c/" + id;
        })
        .catch($exceptionHandler);
      };
      
    },
  };
    
});



//# sourceMappingURL=/dist.js.map
