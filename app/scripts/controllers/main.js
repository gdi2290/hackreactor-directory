'use strict';

angular.module('hackreactorApp')
  .controller('MainCtrl', ['$scope', '$location',
    function($scope, $location) {
      $scope.directory = window._directoryJSON;

      $scope.searchText = '';

      $scope.personUrl = function(person) {
        var index = $scope.directory.indexOf(person);
        return '#/person/' + index;
      };
      $scope.remove = function(person) {
        var index = $scope.directory.indexOf(person);
        $scope.directory.splice(index, 1);
        $location.path('/');
      };

    }
  ]);
