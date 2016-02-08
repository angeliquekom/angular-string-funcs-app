'use strict';

describe('myApp.task3 module', function() {
  var rootScope;
  var scope;
  var controller;
  var vm;

  beforeEach(function(){
    module('myApp');
    module('myApp.task3');
    inject(function(_$rootScope_, _$controller_) {
      rootScope = _$rootScope_;
      scope = rootScope.$new();
      controller = _$controller_;
      vm = controller("task3Ctrl",
        {
          $scope: scope
        }
      );
    });
  });

  describe('task1 controller', function(){

    it('Test controller is defined', function() {
      expect(vm).toBeDefined();
    });

    it('Test string #1', function() {
      vm.string = "test";
      vm.reverseString();
      expect(vm.finalString).toBe("sett");
    });

    it('Test string #2', function() {
      vm.string = "";
      vm.reverseString();
      expect(vm.finalString).toBe("");
    });

    it('Test string #3', function() {
      vm.string = "a";
      vm.reverseString();
      expect(vm.finalString).toBe("a");
    });

    it('Test string #4', function() {
      vm.string = "ab";
      vm.reverseString();
      expect(vm.finalString).toBe("ab");
    });

    it('Test string #5', function() {
      vm.string = "abc";
      vm.reverseString();
      expect(vm.finalString).toBe("cba");
    });

  });
});
