import ImageService from './image.service';

const common = angular
  .module('common', [])
  .service('ImageService', ImageService)
  .name;

export default common;
