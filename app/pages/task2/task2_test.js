'use strict';

describe('myApp.task2 module', function() {
  var rootScope;
  var scope;
  var controller;
  var vm;

  beforeEach(function(){
    module('myApp');
    module('myApp.task2');
    inject(function(_$rootScope_, _$controller_) {
      rootScope = _$rootScope_;
      scope = rootScope.$new();
      controller = _$controller_;
      vm = controller("task2Ctrl",
        {
          $scope: scope,
        }
      );
    });
  });

  describe('task2 controller', function(){

    it('Test controller is defined', function() {
      expect(vm).toBeDefined();
    });

    it('Test input arrays #1', function() {
      vm.arrays.first = [1,2,3,4,5,6];
      vm.arrays.second = [9,8,7,6];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([1,9,2,8,3,7,4,6,5,6]);
    });

    it('Test input arrays #2', function() {
      vm.arrays.first = [1,2];
      vm.arrays.second = [9,8,7,6];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([1,9,2,8,7,6]);
    });

    it('Test input arrays #3', function() {
      vm.arrays.first = [1,2,3,4,5,6];
      vm.arrays.second = [];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([1,2,3,4,5,6]);
    });

    it('Test input arrays #4', function() {
      vm.arrays.first = [];
      vm.arrays.second = [9,8,7,6];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([9,8,7,6]);
    });

    it('Test input arrays #4', function() {
      vm.arrays.first = [];
      vm.arrays.second = [];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([]);
    });

    it('Test input arrays #6', function() {
      vm.arrays.first = ["1","2","3","4","5","6"];
      vm.arrays.second = ["9","8","7","6"];
      vm.compoundArray();
      expect(vm.splittedArrays).toEqual([1,9,2,8,3,7,4,6,5,6]);
    });

  });
});
