export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupElement = document.querySelector(this._popup);
  }

  open() {
    console.log("abrir popup");
    this._popupElement.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    console.log("para cerrar este es el close de Popup Padre");
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleTap);
    document.removeEventListener("click", this._handleCloseButton);
    console.log("Aquí se termina el close() de Popup padre");
  }

  /*almacena la lógica para cerrar el popup al pulsar la tecla Esc.*/

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._popupElement = document.querySelector(".popup_opened");
      this._popupElement.classList.remove("popup_opened");
    }
  }
  /*almacena la lógica para cerrar el popup al pulsar tap en la superposición.*/

  _handleTap(evt) {
    const tap = evt.target.classList.contains("popup");
    if (tap) {
      console.log("me oculto al dar tap");
      evt.target.classList.remove("popup_opened");
    }
  }

  _handleCloseButton(evt) {
    const button = evt.target.classList.contains("close-button");
    if (button) {
      this._popupElement = document.querySelector(".popup_opened");
      this._popupElement.classList.remove("popup_opened");
    }
  }

  //que agrega un detector de eventos de click al icono cerrar del popup
  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleTap);
    document.addEventListener("click", this._handleCloseButton);
  }
}

export class PopupWithImage extends Popup {
  open(evt) {
    const image = this._popupElement.querySelector(".popup__image");
    image.src = evt.target.src;
    const imageDescription = this._popupElement.querySelector(
      ".popup__imagedescription"
    );
    const imageLegend = evt.target.alt;
    imageDescription.textContent = imageLegend;
    super.open();
  }
}

export class PopupWithForm extends Popup {
  //lleva un callback del envío del formulario al constructor, así como el selector popup.
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
    this._popupFormSubmit = this._popupFormSubmit.bind(this);
  }

  /*recopila datos de todos los campos de entrada.*/
  _getInputValues() {
    console.log("soy _getInputValues");
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  _popupFormSubmit(evt) {
    evt.preventDefault();
    console.log(this._formValues);
    this._handleFormSubmit(this._getInputValues());
    this._formElement.reset();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    console.log(this);
    this._formElement.addEventListener("submit", this._popupFormSubmit);
  }

  //modifica el método padre close() para reiniciar  el formularioha cuando cerrado el popup.
  close() {
    this._formElement.removeEventListener("submit", this._popupFormSubmit);
    super.close();
  }
}
