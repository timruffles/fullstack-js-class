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


