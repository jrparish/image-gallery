import ImageEditComponent from './image-edit.component';
import './image-edit.less';

const imageEdit = angular
  .module('components.image-edit', [])
  .component('imageEdit', ImageEditComponent)
  .name;

export default imageEdit;
