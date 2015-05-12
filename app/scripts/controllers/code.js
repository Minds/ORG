define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name orgApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the orgApp
   */
  angular.module('orgApp.controllers.CodeCtrl', [])
    .controller('CodeCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
