import CommentsComponent from './comments.component';

const comments = angular
  .module('components.comments', [])
  .component('comments', CommentsComponent)
  .name;

export default comments;
