const COMMENT_API_URL = 'http://www.mocky.io/v2/5813dbcd1000007f07abb092';

class CommentService {

  comments = [];

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  // Return a list of comments for the given imageId
  list(imageId) {
    return this.comments.filter(comment => comment.imageId === imageId);
  }

  add(comment) {
    return $http.post(COMMENT_API_URL, comment)
      .then(() => {
        // create a dummy id since we're not actually hitting a backend
        const updatedComment = { id: comments.length + 1, ...comment };
        comments.push(updatedComment);
        return updatedComment;
      });
  }


}

export default CommentService;
