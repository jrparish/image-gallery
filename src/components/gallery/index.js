import ImageService from './image.service';
import GalleryComponent from './gallery.component';
import './gallery.less';

const gallery = angular
  .module('components.gallery', [])
  .component('gallery', GalleryComponent)
  .service('ImageService', ImageService)
  .name;

export default gallery;
