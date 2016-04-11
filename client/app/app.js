var app = angular.module('storiesApp', [
  'ngRoute',
  'storiesApp.landing'
]);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/app/landing/landing.html',
      controller: 'landingController'
    })
    .when('/results', {
      templateUrl: '/app/results/results.html',
      controller: 'resultsController'
    });
});
