'use strict'
angular.module('myTest.directives', [])
.directive('rate',[function () {
  return {
    required: 'A',
    scope: {
      min: '=',
      max: '=',
      value: '='
    },
    template: '<div><img class="up" ng-click="up()"/><span class="news-title">{{counter}}</span><img class="down" ng-click="down()"/></div>',
    link: function (scope, element, attr) {
      scope.counter = scope.value;
      scope.up = function () {
        if (scope.counter < scope.max) scope.counter ++;
      };
      scope.down = function () {
        if (scope.counter > scope.min) scope.counter --;
      };

    }
  };
}]);
