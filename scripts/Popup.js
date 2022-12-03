export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupElement = document.querySelector(this._popup);
  }

  open() {
    console.log("abrir popup");
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    console.log("para cerrar");
    this._popup.classList.remove("popup_opened");
  }

  /*almacena la lógica para cerrar el popup al pulsar la tecla Esc.*/

  _handleEscClose(evt) {
    console.log("me oculto al dar click en esc");
    if (evt.key === "Escape") {
      console.log("me habeis picado ah!");
      // popupList.forEach(closePopup);
    }
  }
  //que agrega un detector de eventos de click al icono cerrar del popup
  setEventListeners() {
    console.log("detector de eventos para cuando hacen click y tap");
  }
}

export class PopupWithImage extends Popup {
  open() {
    super.open();
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
