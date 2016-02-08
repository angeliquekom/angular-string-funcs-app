'use strict';

angular.module('myApp.task2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task2', {
    templateUrl: 'pages/task2/task2.html',
    controller: 'task2Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('task2Ctrl', [function() {

  var vm = this;
  this.arrays = {};

  vm.compoundArray = compoundArray;

  function compoundArray() {

    vm.arrays.first = vm.arrays.first.map(function (x) {

      return parseInt(x, 10);
    });

    vm.arrays.second = vm.arrays.second.map(function (x) {

      return parseInt(x, 10);
    });

    vm.arrays.first = (vm.arrays.first) ? vm.arrays.first : [];
    vm.arrays.second = (vm.arrays.second) ? vm.arrays.second : [];

    var minLenghtArray = (vm.arrays.first.length <= vm.arrays.second.length ? vm.arrays.first : vm.arrays.second);
    var maxLenghtArray = (vm.arrays.first.length <= vm.arrays.second.length ? vm.arrays.second : vm.arrays.first);

    var splittedArrays = [];

    minLenghtArray.map (function (item, i) {
      splittedArrays.push(vm.arrays.first[i], vm.arrays.second[i]);
    });

    vm.splittedArrays = splittedArrays.concat(maxLenghtArray.slice(minLenghtArray.length, maxLenghtArray.length));
  }
}]);
