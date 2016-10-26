import angular from 'angular';
import app from './app.module';

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ], { strictDi: true });
});
