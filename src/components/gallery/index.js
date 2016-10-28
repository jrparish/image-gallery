import GalleryComponent from './gallery.component';
import './gallery.less';

const gallery = angular
  .module('components.gallery', [])
  .component('gallery', GalleryComponent)
  .name;

export default gallery;
