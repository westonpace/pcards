'use strict';

describe('Directive: pcard', function () {

  // load the directive's module
  beforeEach(module('wpPcardsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pcard></pcard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pcard directive');
  }));
});
