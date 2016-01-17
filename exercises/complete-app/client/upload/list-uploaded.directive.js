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
