angular.module("gifjoy", [
  "ngRoute",
  "ngResource",
  "ngFileUpload",
])
.config(function($locationProvider) {

  $locationProvider.html5Mode(true);
  
});
