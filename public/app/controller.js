'use strict'
angular.module('myTest.controllers',['myTest.services'])
.controller('mainCtrl', ['$scope', 'newsService', function ($scope, newsService) {
  $scope.news = newsService.get();
}]);
