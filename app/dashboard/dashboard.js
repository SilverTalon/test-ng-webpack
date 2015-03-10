var angular = require('../app.js');

angular.module('myPeachApp')
  .controller(dashboardController);

dashboardController.$inject = [];

function dashboardController() {

  activate();

  function activate() {
    alert('dashboard controller');
  }
}


console.log('dashboard.js loaded');
