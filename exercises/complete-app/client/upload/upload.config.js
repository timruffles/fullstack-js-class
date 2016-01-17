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
