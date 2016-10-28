const AppComponent = {
  template: `
    <div class="main">
      <ui-view name="gallery" class="gallery">Loading Images...</ui-view>
      <ui-view name="workspace" class="workspace"></ui-view>
    </div>
  `
}

export default AppComponent;
