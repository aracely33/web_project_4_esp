export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupElement = document.querySelector(this._popup);
    console.log(this._popupElement);
  }

  open() {
    console.log("abrir popup");
    this._popupElement.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    console.log("para cerrar");
    this._popupElement.classList.remove("popup_opened");
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
    console.log("llamaste a setEventListeners");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleTap);
    document.addEventListener("click", this._handleCloseButton);
  }
}

export class PopupWithImage extends Popup {
  open(evt) {
    super.open();
    console.log(evt);
    //this.popupElement = document.querySelector(".popup_type-image");
    //popupImage.src = this._image;
  }
}

export class PopupWithForm extends Popup {
  /*
      leva un callback del envío del formulario al constructor, así como el selector popup.
  Almacena un método privado llamado _getInputValues(), que recopila datos de todos los campos de entrada.
  Modifica el método padre setEventListeners(). El método setEventListeners() de la clase PopupWithForm debe agregar al formulario un controlador de eventos submit y el detector de eventos click para el icono cerrar.
  Modifica el método padre close() para reiniciar el formulario cuando se ha cerrado el popup.
  Crea una instancia de la clase PopupWithForm para cada popup.
  */
}
