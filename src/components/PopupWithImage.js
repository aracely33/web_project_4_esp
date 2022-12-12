//import Popup from "./Popup.js";
const Popup = require("./Popup");
class PopupWithImage extends Popup {
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

module.exports = PopupWithImage;
