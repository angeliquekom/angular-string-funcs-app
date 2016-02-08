'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.task1',
  'myApp.task2',
  'myApp.task3',
  'myApp.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'pages/task1'});
}]);
