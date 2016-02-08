'use strict';

angular.module('myApp.version.lowercase-filter', [])

.filter('lowercase', ['version', function(version) {

  return function(string) {

    var regLowerCase = /[a-z]/g;

    var match;

    var lowerCaseString = [];

    while (match = regLowerCase.exec(string)) {
      lowerCaseString.push(match[0]);
    }

    return lowerCaseString.join('');

  };

}]);
