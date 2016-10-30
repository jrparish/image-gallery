
class GalleryController {

  /* @ngInject */
  constructor(ImageService, $stateParams, $transitions) {
    Object.assign(this, { ImageService, $stateParams });

    // Update active image when route changes
    $transitions.onSuccess({ to: 'gallery.image' }, () => this.setActiveImage());

    this.setActiveImage();
  }

  setActiveImage() {
    this.active = Number(this.$stateParams.id);
  }

}

const GalleryComponent = {
  controller: GalleryController,
  bindings: {
    images: '<'
  },
  template:  `
    <div>
      <div ng-repeat="image in ::$ctrl.images track by image.id"
        class="thumbnail-container"
        ng-class="{ active: $ctrl.active === image.id }"
        ng-if="image.loaded">
        <img ng-src="{{::image.url}}"
          class="thumbnail"
          ui-sref="gallery.image({ id: image.id })"
          ng-click="$ctrl.setActive(image.id)">
      </div>
      <div ng-if="!$ctrl.images.length">
        There are no images to load.
      </div>
    </div>
  `
};

export default GalleryComponent;
