'use strict';

var angular = require('angular');

angular.module('myPeachApp', [require('angular-route')])
  .config(myPeachAppConfig);

myPeachAppConfig.$inject = ['$routeProvider'];

function myPeachAppConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm',
      resolve: {

      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

module.exports = angular;
