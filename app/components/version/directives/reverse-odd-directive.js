'use strict';

angular.module('myApp.version.reverse-odd', [])

.directive('reverseOdd', reverseOdd);

function reverseOdd() {
  var directive = {
        link: link,
        template: '<form name="myForm">'+
                    '<label>' +
                    'Input:' +
                    '<input type="text" name="string" ng-model="string" ng-disabled="disabled"/>' +
                    '</label>' +
                    '<input type="submit" ng-click="reverseString(string)" value="Calculate" />' +
                  '</form>' +
                  '<p ng-if="finalString">Output - <span>{{finalString}}</span></p>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

      scope.disabled = false;

      scope.reverseString = function() {

        var subArrays = [];

        for (var i = 0; i < Math.floor(scope.string.length / 3); i++  ) {
          subArrays.push(scope.string.slice(i * 3, i * 3 + 3).reverse());
        }

        scope.subArrays = (subArrays.length*3 !== scope.string.length) ?
          subArrays.concat(scope.string.slice(subArrays.length*3, scope.string.length)) : subArrays;

        scope.finalString = scope.subArrays.join('');
        scope.disabled = true;

      }
    }
}
