define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name orgApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the orgApp
   */
  angular.module('orgApp.controllers.MainCtrl', [])
    .controller('MainCtrl', ["$scope", function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
});
