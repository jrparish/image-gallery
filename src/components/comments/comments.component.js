class CommentsController {

  /* @ngInject */
  constructor(CommentService, $stateParams) {
    Object.assign(this, { CommentService });
    this.imageId = $stateParams.id;
    this.resetComment();
  }

  submit() {
    // Exit out if required fields not entered
    if (this.AddCommentForm.$invalid) {
      return;
    }

    this.CommentService.add(this.comment)
      .then(() => this.updateCommentsList())
      .then(() => this.resetComment());
  }

  updateCommentsList() {
    return (this.comments = this.CommentService.list(this.imageId));
  }

  resetComment() {
    this.comment = {
      date: new Date(),
      imageId: this.imageId
    };
  }

}

const CommentsComponent = {
  controller: CommentsController,
  bindings: {
    comments: '<',
    image: '<'
  },
  template: `
    <div class="comments" ng-show="$ctrl.image.url">
      <h2>Comments</h2>
      <ul class="comment-container">
        <li class="comment" ng-repeat="comment in $ctrl.comments">
          <div class="user-info">
            <div class="username">By {{comment.name}}</div>
            <div class="timestamp">{{comment.date | date : 'short'}}</div>
          </div>
          <div class="content">{{comment.text}}</div>
        </li>
        <li class="comment no-content" ng-show="!$ctrl.comments.length">
          There are no comments yet.
        </li>
      </ul>
      <hr>
      <form name="$ctrl.AddCommentForm" class="add-comment-form">
        <div class="form-group name">
          <label>Name</label>
          <input type="text" ng-model="$ctrl.comment.name" maxlength="30" required>
        </div>
        <div class="form-group comment">
          <label>Comment</label>
          <textarea ng-model="$ctrl.comment.text"
            maxlength="1024" rows="5" required></textarea>
        </div>
        <div class="form-group submit">
          <button type="submit" class="submit-btn" ng-click="$ctrl.submit()">Submit</button>
        </div>
      </form>
    </div>
  `
}

export default CommentsComponent;
