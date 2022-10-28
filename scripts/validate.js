/*const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");

  errorElement.textContent = errorMessage;
  console.log(errorElement.textContent);
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};
*/
const setEventListeners = (formElement, popupForm) => {
  this.formElement = formElement;
  this.popupForm = popupForm;

  const inputList = Array.from(
    formElement.querySelectorAll(popupForm.inputSelector)
  );

  const buttonElement = formElement.querySelector(
    popupForm.submitButtonSelector
  );

  //const buttonElement = formElement.querySelector(".form__submit");
  toggleButtonState(inputList, buttonElement, popupForm);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      /*checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);*/
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
    console.log("debería aparecer un mensaje rojo molesto");
    // showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    console.log("todo marcha bien");
    //hideInputError(formElement, inputElement);
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
    //buttonElement.classList.add("form__Button_inactive");esto iba antes
  } else {
    buttonElement.classList.remove(popupForm.inactiveButtonClass);
    //buttonElement.classList.remove("form__Button_inactive");esto iba antes
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
