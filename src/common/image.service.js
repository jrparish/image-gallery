import find from 'lodash/find';

const IMAGE_COUNT = 200;     // Number of images to display
const PRELOAD_THRESHOLD = 20;   // Number of images to preload at a time
const IMAGE_URL_PREFIX = 'https://unsplash.it';
const IMAGE_API_URL = `${IMAGE_URL_PREFIX}/list`;

class ImageService {

  images = [];

  /* @ngInject */
  constructor($http, $q) {
    Object.assign(this, { $http, $q });
  }

  // Fetches a list of images, stores the images on the service, then starts to preload them
  fetch() {
    // No need to fetch and parse this large list more than once
    if (this.images.length) {
      return this.$q.resolve(this.images);
    }

    return this.$http.get(IMAGE_API_URL)
      .then(imageResponse => this.generateImageList(imageResponse.data))
      .then(images => (this.images = images))
      .catch(err => this.$q.reject(err))
      .finally(() => {
        this.startPreload();
      });
  }

  // Returns the image at the specified id
  get(id) {
    if (!id) {
      return {};
    }
    return find(this.images, { id: Number(id) }) || {};
  }

  // Transforms the image response into the json we need
  generateImageList(images) {
    return images
      .map(image => ({
        id: image.id,
        url: `${IMAGE_URL_PREFIX}/600/600?image=${image.id}`,
        rotation: 0,
        loaded: false
      }))
      .slice(0, IMAGE_COUNT);
  }

  // Initiates the image preloading process
  // Recursively preloads images until all images are loaded
  startPreload(startIdx = 0) {
    const nextImageSet = this.images.slice(startIdx, startIdx += 30);

    if (!nextImageSet.length) {
      return;
    }

    return this.preload(nextImageSet)
      .then(() => this.startPreload(startIdx));
  }

  // Preloads the images so we don't get choppy rendering
  // Returns a promise that resolves after threshold number of images
  // have been loaded
  preload(images = []) {
    const deferred = this.$q.defer();
    let loaded = 0;

    if (!images.length) {
      deferred.resolve(images);
    }

    images.map(image => {
      angular
        .element(new Image())
        .bind('load error', () => {
          image.loaded = true;
          if (++loaded >= images.length) {
            deferred.resolve(images);
          }
        })
        .attr('src', image.url)
    });

    return deferred.promise;
  }

}

export default ImageService;
