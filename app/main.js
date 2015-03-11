/*require('./main.css');

var angular = require('angular');

var route = function() {
  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function (require) {
      require('./components/dashboard/dashboard.js');
    });
  } else if (location.hash === '#admin') {
    require.ensure([], function (require) {
      require('./components/admin/admin.js');
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
*/
