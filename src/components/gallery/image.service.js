
const IMAGE_COUNT = 50;
const IMAGE_URL_PREFIX = 'https://unsplash.it';
const IMAGE_API_URL = `${IMAGE_URL_PREFIX}/list`;

class ImageService {

  /* @ngInject */
  constructor($http, $q) {
    Object.assign(this, { $http, $q });
  }

  fetch() {
    return this.$http.get(IMAGE_API_URL)
      .then(imageResponse => this.generateImageList(imageResponse.data))
      .then(images => this.preload(images))
      .catch(err => this.$q.reject(err));
  }

  // Transforms the image response into the json we need
  generateImageList(images) {
    return images
      .map(image => ({
        id: image.id,
        url: `${IMAGE_URL_PREFIX}/800/800?image=${image.id}`
      }))
      .slice(0, IMAGE_COUNT - 1);
  }

  // Preloads the images so we don't get choppy rendering
  // Returns a promise that resolves after all images have finished loading
  preload(images) {
    let deferred = this.$q.defer();
    let loaded = 0;

    images.forEach(image => {
      angular
        .element(new Image())
        .bind('load error', () => {
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
