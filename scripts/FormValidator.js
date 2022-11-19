//export const newProfileForm = document.forms.form;
//export const newPlaceForm = document.forms.formPlace;
const nameInput = document.forms.form.nombre;
const jobInput = document.forms.form.ocupación;
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");
const forms = document.querySelectorAll(".form");
/*console.log(nameInput);
console.log(jobInput);
console.log(profileName);
console.log(profileOccupation);*/

class FormValidator {
  //Tu constructor tiene dos parámetros.
  //El primer parámetro es un objeto de configuración que almacena los selectores y las clases del formulario,
  //el segundo toma un elemento del formulario a validar.
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._forms = document.querySelectorAll(config.formSelector);
  }

  enableValidation() {
    const formList = Array.from(this._forms);
    formList.forEach((formElement) => {
      //PARA EL SUBMIT DE CADA FORMUALARIO
      formElement.addEventListener("submit", (evt) => {
        console.log("hola voy a hacer submit");
        evt.preventDefault();
      });
      this._setEventListeners(formElement, this._config); //formElement, settings
    });
  }

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
      //*    AUN NO SÉ SI FUNCIONA***************!!!!!
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

  _toggleButtonState(inputList, buttonElement, settings) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      console.log("tengo un error");
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this._config
      );
    } else {
      console.log("no tengo ningún error");
      this._hideInputError(formElement, inputElement, this._config);
    }
  }

  _showInputError(formElement, inputElement, errorMessage, settings) {
    console.log("soy el mensaje de error en sí");
    //const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    //inputElement.classList.add(settings.inputErrorClass);
    //errorElement.textContent = errorMessage;
    //console.log(errorElement.textContent);
    // errorElement.classList.add(settings.errorClass);
  }

  _hideInputError(formElement, inputElement, settings) {
    console.log(formElement);
    console.log(inputElement);
    console.log(settings);
    //const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    //inputElement.classList.remove(settings.inputErrorClass);
    //errorElement.classList.remove(settings.errorClass);
    //errorElement.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //enableValidation();
  /*{ formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  }*/

  //Tiene métodos privados para:
  //comprobar la validez del campo*************
  //cambiar el estado del botón Submit***********
  //agregar todos los controladores necesarios.**********

  //Tiene un método público enableValidation(), que activa la validación del formulario.
}

//Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.FOREACH
forms.forEach((form) => {
  const validate = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible",
    },
    form
  );
  validate.enableValidation();
});

/*

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const setEventListeners = (formElement, settings) => {
  this.formElement = formElement;
  this.settings = settings;

  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );

  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  formElement.addEventListener("reset", () => {
    // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings);
    }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {***1
  this.settings = settings;
  console.log(settings.formSelector);
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

enableValidation();
/*{ formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}*/
