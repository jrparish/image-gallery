import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';
import Common from './common';
import './app.less';

const app = angular
  .module('app', [
    uiRouter,
    Components,
    Common
  ])
  .component('app', AppComponent)
  .config($stateProvider => {
    $stateProvider
      .state({
        name: 'gallery',
        url: '',
        views: {
          gallery: 'gallery',
          workspace: 'workspace'
        }
      })
      .state({
        name: 'gallery.image',
        url: '/images/:id',
        component: 'image'
      });
  })
  .name;

export default app;
