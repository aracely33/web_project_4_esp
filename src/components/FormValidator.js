class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  //Tiene métodos privados para:
  //agregar todos los controladores necesarios.**********

  _setEventListeners(formElement, config) {
    this._formElement = formElement;
    this._config = config;

    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._config.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement, this._config);

    this._formElement.addEventListener("reset", () => {
      // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement, this._config);
      }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, this._config);
      });
    });
  }

  //cambiar el estado del botón Submit***********

  _disableButton(buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }

  _ableButton(buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }

  _toggleButtonState(inputList, buttonElement, config) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement, config);
    } else {
      this._ableButton(buttonElement, config);
    }
  }

  //comprobar la validez del campo*************
  _checkInputValidity(formElement, inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement, this._config);
    } else {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this._config
      );
    }
  }

  _showInputError(formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  }

  _hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //Activar la validación
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(this._formElement, this._config);
  }
}

module.exports = FormValidator;
