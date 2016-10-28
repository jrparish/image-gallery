
class WorkspaceController {

}

const WorkspaceComponent = {
  controller: WorkspaceController,
  template: `
    <ui-view name="image">
      Select an image...
    </ui-view>
    <ui-view name="comments"></ui-view>
  `
}

export default WorkspaceComponent;
