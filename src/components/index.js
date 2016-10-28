import Gallery from './gallery';
import Workspace from './workspace';
import ImageEdit from './image-edit';
import Comments from './comments';

const components = angular
  .module('components', [
    Gallery,
    Workspace,
    ImageEdit,
    Comments
  ])
  .name;

export default components;
