import WorkspaceComponent from './workspace.component';
import './workspace.less';

const workspace = angular
  .module('components.workspace', [])
  .component('workspace', WorkspaceComponent)
  .name;

export default workspace;
