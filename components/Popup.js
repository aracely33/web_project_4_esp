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
    console.log("llamaste a setEventListeners original tambien");
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
    console.log(this._formElement);
    this._handleFormSubmit = handleFormSubmit;
    console.log(this);
  }

  /*recopila datos de todos los campos de entrada.*/
  _getInputValues(evt) {
    console.log("soy _getInputValues");
    /*this._inputList = this._formElement.querySelectorAll(".form__input");
    console.log(this._inputList);
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;*/
  }

  _popupFormSubmit(evt, getInputValues) {
    evt.preventDefault();
    console.log(evt.target);
    getInputValues;

    //this._handleFormSubmit(this._getInputValues);
    //this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._popupFormSubmit);
  }

  //modifica el método padre close() para reiniciar  el formularioha cuando cerrado el popup.
  close() {
    this._formElement.reset();
    this._formElement.removeEventListener("submit", this._popupFormSubmit);
    super.close();
  }

  /*
  Modifica el método padre setEventListeners(). 
  El método setEventListeners() de la clase PopupWithForm debe
  agregar al formulario un controlador de eventos submit 
  y el detector de eventos click para el icono cerrar.
  Modifica el método padre close() para reiniciar el formulario cuando se ha cerrado el popup.
  Crea una instancia de la clase PopupWithForm para cada popup.
  */
}

/*
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });


  */
/*
  _popupFormSubmit(evt) {
    evt.preventDefault();

    this.close();
  }*/

//this._formElement.addEventListener("submit", this._popupFormSubmit);

//this._formElement.removeEventListener("submit", this._popupFormSubmit);
