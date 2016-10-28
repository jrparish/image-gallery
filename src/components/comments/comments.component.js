
class CommentsController {

}

const CommentsComponent = {
  controller: CommentsController,
  bindings: {
    comments: '<'
  },
  template: `
    <div class="comments">
      <h2>Comments</h2>
      <div class="add-comment-form">
        <div class="form-group name">
          <label>Name</label>
          <input type="text" ng-model="comment.name">
        </div>
        <div class="form-group comment">
          <label>Comment</label>
          <textarea ng-model="comment.text" rows="5"></textarea>
        </div>
      </div>
    </div>
  `
}

export default CommentsComponent;
