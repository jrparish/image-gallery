
class GalleryController {

  loading = true;
  images = [];

  /* @ngInject */
  constructor(ImageService) {
    this.ImageService = ImageService;
    this.fetchImages();
  }

  fetchImages() {
    this.ImageService.fetch()
      .then(images => {
        this.images = images;
        this.loading = false;
      });
  }

}

const GalleryComponent = {
  controller: GalleryController,
  template:  `
    <div class="gallery">
      <div ng-show="$ctrl.loading">Loading Images...</div>
      <div ng-repeat="image in $ctrl.images track by image.id" class="thumbnail-container">
        <img ng-src="{{image.url}}" class="thumbnail">
      </div>
    </div>
  `
};

export default GalleryComponent;
