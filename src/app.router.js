function AppRouter($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state({
      name: 'gallery',
      url: '/images',
      views: {
        gallery: 'gallery',
        workspace: 'workspace'
      },
      resolve: {
        images: ImageService => ImageService.fetch()
      }
    })
    .state({
      name: 'gallery.image',
      url: '/:id',
      views: {
        image: 'imageEdit',
        comments: 'comments'
      },
      resolve: {
        image: (ImageService, $stateParams) => ImageService.get($stateParams.id),
        comments: (CommentService, $stateParams) => CommentService.list($stateParams.id)
      }
    })
    .state({
      name: 'not-found',
      url: '/404',
      views: {
        gallery: {
          template: `
            <div class="not-found">
              <h3>The requested page was not found.</h3>
              <div class="return">
                <a ui-sref="gallery">Click here to return to the gallery</a>
              </div>
            </div>
          `
        }
      }
    });

  $urlRouterProvider
    .when('', '/images')
    .otherwise('/404');
}

export default AppRouter;
