import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

const app = angular
  .module('app', [
    uiRouter
  ])
  .component('app', AppComponent)
  .name;

export default app;
