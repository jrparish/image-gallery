
class ImageEditController {

  /* @ngInject */
  constructor(ImageService) {
    Object.assign(this, { ImageService });
  }

  rotate() {
    let currentRotation = this.image.rotation;
    this.image.rotation = ++currentRotation < 4 ? currentRotation : 0;
  }
}

const ImageEditComponent = {
  controller: ImageEditController,
  bindings: {
    image: '<'
  },
  template: `
    <div class="image-edit" ng-cloak ng-show="$ctrl.image.url">
      <div class="image-container">
        <img ng-src="{{$ctrl.image.url}}" class="image"
          ng-class="{
            'rotate-1': $ctrl.image.rotation === 1,
            'rotate-2': $ctrl.image.rotation === 2,
            'rotate-3': $ctrl.image.rotation === 3
          }">
      </div>
      <div class="rotate-container">
        <button type="button" class="rotate-btn" ng-click="$ctrl.rotate()">Rotate Image</button>
      </div>
    </div>
    <div ng-show="!$ctrl.image.url">
      Image does not exist. Please select another one.
    </div>
  `
}

export default ImageEditComponent;
