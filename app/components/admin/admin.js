'use strict';

require('./admin.html');

var angular = require('angular');

angular.module('peachWeb.admin', []).
  controller('AdminController', ['$routeParams', AdminController]);

function AdminController($routeParams) {
  this.title = 'My Admin Panel';
  this.canPass = $routeParams.canPass === '1';
}

AdminController.prototype.canActivate = function() {
  if(this.canPass) {
    require.ensure([], function (require) {
      require('./admin.lazy')(this);
    });
    return;
  }
  this.error = 'Sorry, but you cant be back here';
};

console.log('loaded AdminController');
