export default class Popup {
  constructor(popupSelector) {
    this._popup = popup;
  }

  open() {
    console.log("para abrir");
  }

  close() {
    console.log("para cerrar");
  }

  /*almacena la lógica para cerrar el popup al pulsar la tecla Esc.*/

  _handleEscClose() {}
}
