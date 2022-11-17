export class Card {
  constructor(data, selector) {
    this._title = data.title;
    this._image = data.url;
    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".item__place").src = this._image;

    this._element.querySelector(".item__place-info-name").textContent =
      this._title;
    this._element.querySelector(".item__place").alt = this._title;
    this._element
      .querySelector(".item__place-like-button")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("item__place-like-button_active");
      });
    this._element
      .querySelector(".item__trash-button")
      .addEventListener("click", function (evt) {
        evt.target.closest(".item").remove();
      });

    return this._element;
  }
}
