import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import AppRouter from './app.router';
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
  .config(AppRouter)
  .name;

export default app;
