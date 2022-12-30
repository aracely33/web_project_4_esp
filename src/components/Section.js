class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    console.log(this._renderedItems);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}

module.exports = Section;
