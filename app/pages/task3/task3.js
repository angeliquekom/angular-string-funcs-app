'use strict';

angular.module('myApp.task3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task3', {
    templateUrl: 'pages/task3/task3.html',
    controller: 'task3Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('task3Ctrl', [function() {

  var vm = this;

  vm.string = "";
  vm.reverseString = reverseString;

  function reverseString() {

    var subArrays = [];

    for (var i = 0; i < Math.floor(vm.string.length / 3); i++  ) {
      subArrays.push(vm.string.slice(i * 3, i * 3 + 3).reverse());
    }

    vm.subArrays = (subArrays.length*3 !== vm.string.length) ?
      subArrays.concat(vm.string.slice(subArrays.length*3, vm.string.length)) : subArrays;

    vm.finalString = vm.subArrays.join('');
  }

}]);
