const showInputError = (formElement, inputElement, errorMessage, popupForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(popupForm.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(popupForm.errorClass);
};

const hideInputError = (formElement, inputElement, popupForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(popupForm.inputErrorClass);
  errorElement.classList.remove(popupForm.errorClass);
  errorElement.textContent = "";
};

const setEventListeners = (formElement, popupForm) => {
  this.formElement = formElement;
  this.popupForm = popupForm;

  const inputList = Array.from(
    formElement.querySelectorAll(popupForm.inputSelector)
  );

  const buttonElement = formElement.querySelector(
    popupForm.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, popupForm);

  formElement.addEventListener("reset", () => {
    // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, popupForm);
    }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, popupForm);
    });
  });
};

const enableValidation = (popupForm) => {
  this.popupForm = popupForm;
  const formList = Array.from(
    document.querySelectorAll(popupForm.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset, popupForm);
    });
  });
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      popupForm
    );
  } else {
    hideInputError(formElement, inputElement, popupForm);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, popupForm) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(popupForm.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(popupForm.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
