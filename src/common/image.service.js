import find from 'lodash/find';

const IMAGE_COUNT = 20;     // Number of images to display
const PRELOAD_THRESHOLD = 100;   // Number of images to preload before displaying
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
    return this.$http.get(IMAGE_API_URL)
      .then(imageResponse => this.generateImageList(imageResponse.data))
      .then(images => (this.images = images))
      .then(images => this.preload(images))
      .catch(err => this.$q.reject(err));
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
        url: `${IMAGE_URL_PREFIX}/800/800?image=${image.id}`,
        rotation: 0
      }))
      .slice(0, IMAGE_COUNT);
  }

  // Preloads the images so we don't get choppy rendering
  // Returns a promise that resolves after threshold number of images
  // have been loaded
  preload(images = []) {
    const deferred = this.$q.defer();
    const threshold = PRELOAD_THRESHOLD < IMAGE_COUNT ? PRELOAD_THRESHOLD : IMAGE_COUNT;
    let loaded = 0;

    if (!images.length) {
      deferred.resolve(images);
    }

    images.forEach(image => {
      angular
        .element(new Image())
        .bind('load error', () => {
          if (++loaded >= threshold) {
            deferred.resolve(images);
          }
        })
        .attr('src', image.url)
    });

    return deferred.promise;
  }

}

export default ImageService;
