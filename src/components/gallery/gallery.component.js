
class GalleryController {

  loading = true;
  images = [];

  /* @ngInject */
  constructor(ImageService, $stateParams, $transitions) {
    Object.assign(this, { ImageService, $stateParams });

    // Update active image when route changes
    $transitions.onSuccess({ to: 'gallery.image' }, () => this.setActiveImage());

    this.setActiveImage();
    this.loadImages();
  }

  loadImages() {
    this.ImageService.preload()
      .then(images => {
        this.images = images;
        this.loading = false;
      });
  }

  setActiveImage() {
    this.active = Number(this.$stateParams.id);
  }

}

const GalleryComponent = {
  controller: GalleryController,
  template:  `
    <div>
      <div ng-show="$ctrl.loading">Loading Images...</div>
      <div ng-repeat="image in $ctrl.images track by image.id"
        class="thumbnail-container"
        ng-class="{ active: $ctrl.active === image.id }">
        <img ng-src="{{image.url}}"
          class="thumbnail"
          ui-sref="gallery.image({ id: image.id })"
          ng-click="$ctrl.setActive(image.id)">
      </div>
    </div>
  `
};

export default GalleryComponent;
