'use strict';

angular.module('myApp.version', [
  'myApp.version.version-directive',
  'myApp.version.lowercase-values',
  'myApp.version.lowercase-filter',
  'myApp.version.reverse-odd'
])

.value('version', '0.1');
