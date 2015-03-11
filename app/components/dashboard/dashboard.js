'use strict';

require('./dashboard.html');

var angular = require('angular');

angular.module('peachWeb.dashboard', []).
  controller('DashboardController', [DashboardController]);

function DashboardController() {
  this.title = 'My Dashboard';
}

DashboardController.prototype.canActivate = function() {
  /*require.ensure([], function (require) {
    require('./dashboard.lazy');
  });*/
};


console.log('loaded DashboardController');
