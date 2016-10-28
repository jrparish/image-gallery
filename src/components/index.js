import Gallery from './gallery';
import Workspace from './workspace';

const components = angular
  .module('components', [
    Gallery,
    Workspace
  ])
  .name;

export default components;
