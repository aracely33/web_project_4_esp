import { handleBigImageAppear } from "./utils.js";
export default class Card {
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

  /*Los nombres de las funciones deben relacionarse con lo que hacen,
   Esta funcion su proposito es añadir eventos, 
   un nombre mas apropiado seria addEventListeners*/
  _addEventListeners() {
    this._element = this._getTemplate();

    this._element
      .querySelector(".item__place")
      .addEventListener("click", function (evt) {
        handleBigImageAppear(evt);
      });
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
    this._element.querySelector(".item__place").src = this._image;
    this._element.querySelector(".item__place-info-name").textContent =
      this._title;
    this._element.querySelector(".item__place").alt = this._title;
    /*Asi como obtuviste el template,
     deberias de obtener los elementos que 
     necesitas esto lo puedes hacer en un metodo aparte, 
    dado que utilizas tla palabra this este vivira 
    en el contexto de la clase*/
    return this._element;
  }
}
