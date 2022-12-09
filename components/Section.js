export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    console.log("llamasta a renderItems() de Section");
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    console.log("llamasta a addItem() de Section");
    console.log(this._container);
    this._container.append(element);
  }
}
