import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';
import './app.less';

const app = angular
  .module('app', [
    uiRouter,
    Components
  ])
  .component('app', AppComponent)
  .config($stateProvider => {
    $stateProvider
      .state({
        name: 'gallery',
        url: '',
        component: 'gallery'
      })
      .state({
        name: 'gallery.image',
        url: '/images/:id',
        component: 'image'
      });
  })
  .name;

export default app;
