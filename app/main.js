require('./main.css');

var angular = require('angular');

var route = function() {
  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function (require) {
      var Dashboard = require('./dashboard/dashboard.js');
      //React.render(Home(), document.getElementById('app'));
    });
  } else if (location.hash === '#admin') {
    require.ensure([], function (require) {
      var Admin = require('./admin/admin.js');
      //React.render(Home(), document.getElementById('app'));
    });
  }
};

window.onhashchange = route;

route();

if (module.hot) {
  module.hot.accept(function () {
    route();
  });
}
