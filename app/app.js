'use strict';

var angular = require('angular');
var ngNewRouter = require('ngNewRouter');
require('./components/dashboard/dashboard');
require('./components/admin/admin');

angular.module('peachWeb', ['ngNewRouter', 'peachWeb.dashboard', 'peachWeb.admin'])
  .controller('PeachAppController', ['$router', PeachAppController]);

function PeachAppController($router) {
  $router.config([
    { path: '/',                  redirectTo: '/dashboard' },
    { path: '/dashboard',         component: 'dashboard' },
    { path: '/admin/:canPass',     component: 'admin' }
  ]);
}

module.exports = angular;
