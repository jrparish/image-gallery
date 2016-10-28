import CommentsComponent from './comments.component';
import CommentService from './comment.service';
import './comments.less';

const comments = angular
  .module('components.comments', [])
  .component('comments', CommentsComponent)
  .service('CommentService', CommentService)
  .name;

export default comments;
