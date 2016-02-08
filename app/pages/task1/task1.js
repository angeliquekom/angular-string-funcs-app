'use strict';

angular.module('myApp.task1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task1', {
    templateUrl: 'pages/task1/task1.html',
    controller: 'task1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('task1Ctrl', ['$filter', 'lowerCaseTable', function($filter, lowerCaseTable) {

  var vm = this;
  this.strings = {};
  vm.strings.first = "";
  vm.strings.second = "";

  vm.resultString = resultString;

  function resultString() {

    // Filter only lowercase chars
    vm.first = $filter('lowercase')(vm.strings.first);
    vm.second = $filter('lowercase')(vm.strings.second);

    vm.occurencesFirst = lowercaseCharFrequency(vm.first);
    vm.matchedOccurences = matchCharStrings(vm.occurencesFirst, vm.second);
    vm.sortedByCounterMatchedOccurences = sortOccurences(vm.matchedOccurences, 'counter', 'identicator', 'char');
    vm.outputString = outputString(vm.sortedByCounterMatchedOccurences);
  }

  function sortOccurences(array, prop1, prop2, prop3) {

    array = array.sort(function(a, b) {

      if (a[prop1] > b[prop1]) {
        return -1;
      }
      else if (a[prop1] <  b[prop1]) {
        return 1;
      }
      else if (a[prop2] < b[prop2]) {
        return -1;
      }
      else if (a[prop2] > b[prop2]) {
        return 1;
      }
      else if (a[prop3] < b[prop3]) {
        return -1;
      }
      else if (a[prop3] > b[prop3]) {
        return 1;
      }
      else {
        return 0;
      }

    });

    return array;
  }

  function lowercaseCharFrequency(stringInput) {

    var occurences = {};

    Object.keys(lowerCaseTable).map( function (char) {

      var counter = stringInput.count(char);

      if (counter) {
        occurences[char] = counter;
      }
    });

    return occurences;
  }

  function matchCharStrings(occurencesStringFirst, secondString) {

    var matchedOccurences = [];

    Object.keys(occurencesStringFirst).map( function (char) {

      var counter = secondString.count(char);

      var tempObject = {};

      if (counter > occurencesStringFirst[char]) {
        tempObject['char'] = char;
        tempObject['identicator'] = "2";
        tempObject['counter'] = counter;
      } else if (counter === occurencesStringFirst[char] && counter > 1) {
        tempObject['char'] = char;
        tempObject['identicator'] = "=";
        tempObject['counter'] = occurencesStringFirst[char];
      } else if (occurencesStringFirst[char] > 1 && counter > 0 ){
        tempObject['char'] = char;
        tempObject['identicator'] = "1";
        tempObject['counter'] = occurencesStringFirst[char];
      }

      if (tempObject.char) {
        matchedOccurences.push(tempObject);
      }

    });

    return matchedOccurences;
  }

  function outputString(occurences) {

    var string = "";

    occurences.map( function (object) {
        string += object.identicator + ':' + object.char.repeat(object.counter) + '/';
    });

    string = string.slice(0, -1);

    return string;
  }

}]);
