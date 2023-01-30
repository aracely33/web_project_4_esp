class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupElement = document.querySelector(this._popup);
    this._handleCloseButton = this._handleCloseButton.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleTap = this._handleTap.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleTap);
    document.removeEventListener("click", this._handleCloseButton);
  }

  /*almacena la lógica para cerrar el popup al pulsar la tecla Esc.*/

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._popupElement = document.querySelector(".popup_opened");
      this.close();
    }
  }
  /*almacena la lógica para cerrar el popup al pulsar tap en la superposición.*/

  _handleTap(evt) {
    const tap = evt.target.classList.contains("popup");
    this._popupElement = evt.target;
    if (tap) {
      this.close();
    }
  }

  _handleCloseButton(evt) {
    const button = evt.target.classList.contains("close-button");
    this._popupElement = document.querySelector(".popup_opened");

    if (button) {
      this.close();
    }
  }

  //que agrega un detector de eventos de click al icono cerrar del popup
  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleTap);
    document.addEventListener("click", this._handleCloseButton);
  }
}

module.exports = Popup;
