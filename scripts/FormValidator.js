export const forms = document.querySelectorAll(".form");
export class FormValidator {
  //Tu constructor tiene dos parámetros.
  //El primer parámetro es un objeto de configuración "config" que almacena los selectores y las clases del formulario,
  //el segundo toma un elemento del formulario a validar.
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._forms = document.querySelectorAll(config.formSelector);
  }
  //Tiene un método público enableValidation(), que activa la validación del formulario.
  enableValidation() {
    //PARA EL SUBMIT DE CADA FORMUALARIO
    this._formElement.addEventListener("submit", (evt) => {
      console.log("hola voy a hacer submit");
      evt.preventDefault();
    });

    this._setEventListeners(this._formElement, this._config);
  }

  //Tiene métodos privados para:

  //agregar todos los controladores necesarios.**********

  _setEventListeners(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;

    const inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._settings.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement, this._settings);

    this._formElement.addEventListener("reset", () => {
      // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement, this._settings);
      }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, this._settings);
      });
    });
  }

  //cambiar el estado del botón Submit***********

  _toggleButtonState(inputList, buttonElement, settings) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }
  //comprobar la validez del campo*************
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this._config
      );
    } else {
      this._hideInputError(formElement, inputElement, this._config);
    }
  }

  _showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  }

  _hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
