'use strict';

describe('myApp.task1 module', function() {
  var mockLowerCaseTable;
  var rootScope;
  var scope;
  var controller;
  var vm;

  beforeEach(function(){
    module('myApp');
    module('myApp.task1');
    inject(function(_$rootScope_, _$controller_, _lowerCaseTable_) {
      rootScope = _$rootScope_;
      scope = rootScope.$new();
      controller = _$controller_;
      mockLowerCaseTable = _lowerCaseTable_;
      vm = controller("task1Ctrl",
        {
          $scope: scope,
          lowerCaseTable: mockLowerCaseTable
        }
      );
    });
  });

  describe('task1 controller', function(){

    it('Test controller is defined', function() {
      expect(vm).toBeDefined();
    });

    it('Test string #1', function() {
      vm.strings.first = "Are the kids at home? aaaaa fffff";
      vm.strings.second = "Yes they are here! aaaaa fffff";
      vm.resultString();
      expect(vm.outputString).toBe("=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh");
    });

    it('Test string #2', function() {
      vm.strings.first = "mmmmm m nnnnn y&friend&Paul has heavy hats! &";
      vm.strings.second = "my frie n d Joh n has ma n y ma n y frie n ds n&";
      vm.resultString();
      expect(vm.outputString).toBe("1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss");
    });

    it('Test string #3', function() {
      vm.strings.first = "Are the kids at home? aaaaa fffff";
      vm.strings.second = "Yes they are here! aaaaa fffff";
      vm.resultString();
      expect(vm.outputString).toBe("=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh");
    });

  });
});
