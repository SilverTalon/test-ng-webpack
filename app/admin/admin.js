var angular = require('../app.js');

angular.module('myPeachApp')
  .controller(adminController);

  adminController.$inject = [];

function adminController() {

  activate();

  function activate() {
    alert('admin controller');
  }
}

console.log('admin.js loaded');
