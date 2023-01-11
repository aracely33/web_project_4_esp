//import { handleBigImageAppear } from "./utils.js";
class Card {
  constructor(data, callback, selector) {
    this._data = data;
    this._title = data.title;
    this._image = data.url;
    this._selector = selector;
    this._handleCardClick = callback;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    return cardElement;
  }

  _addEventListeners() {
    this._element = this._getTemplate();

    this._element
      .querySelector(".item__place")
      .addEventListener("click", this._handleCardClick);
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
  }

  generateCard() {
    this._element = this._getTemplate();
    this._addEventListeners();

    /*this._element.querySelector(".item__likes-number").textContent =
      this._data.likes.lenght;*/
    this._element.querySelector(".item__place").src = this._image;
    this._element.querySelector(".item__place-info-name").textContent =
      this._title;
    this._element.querySelector(".item__place").alt = this._title;

    return this._element;
  }
}

module.exports = Card;
