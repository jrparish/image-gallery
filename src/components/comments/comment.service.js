class CommentService {

  comments = [];

  /* @ngInject */
  constructor($http, $q) {
    Object.assign(this, { $http, $q });
  }

  // Return a list of comments for the given imageId
  list(imageId) {
    return this.comments.filter(comment => comment.imageId === imageId);
  }

  // Saves the comment to the server and adds it to the comments list
  add(comment) {
    // since this is going to fail without a backend, modifying the catch to
    // ensure success!
    return this.$http.post(`/api/images/${comment.imageId}/comments`, comment)
      .catch(() => {
        const updatedComment = { id: this.comments.length + 1, ...comment };
        this.comments.push(updatedComment);
        return this.$q.resolve(updatedComment);
      });
  }

}

export default CommentService;
