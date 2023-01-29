const Popup = require("./Popup");

class PopupWithForm extends Popup {
  //lleva un callback del envío del formulario al constructor, así como el selector popup.
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
    this._popupFormSubmit = this._popupFormSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  _popupFormSubmit(evt) {
    evt.preventDefault();
    evt.target.querySelector(".form__Button").textContent = "Guardando...";

    this._handleFormSubmit(this._getInputValues());

    this._formElement.reset();
    evt.target.querySelector(".form__Button").textContent = "Guardar";

    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._popupFormSubmit);
  }

  //modifica el método padre close() para reiniciar  el formularioha cuando cerrado el popup.
  close() {
    this._formElement.removeEventListener("submit", this._popupFormSubmit);
    super.close();
  }
}

module.exports = PopupWithForm;
