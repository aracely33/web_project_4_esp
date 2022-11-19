const newProfileForm = document.forms.form;
const newPlaceForm = document.forms.formPlace;
const placesContainer = document.querySelector(".gallery");
/*const data = {
  title:

};*/

const initialPlacesInfo = [
  {
    title: "Valle de Yosemite",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

initialPlacesInfo.forEach((item) => {
  const card = new Card(item, ".template__place");
  const cardElement = card.generateCard();

  // Añadir al DOM
  document.querySelector(".gallery").append(cardElement);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

export function handleNewPlaceFormSubmit(evt) {
  //  ESTO ES para el evento SUBMIT UNA VEZ VALIDADO**
  evt.preventDefault();
  console.log("holi SOY UN NUEVO LUGAR");
  console.log(evt.target.elements);
  /*const newItem = new Card(data, "template__place");
  placesContainer.prepend(newItem);
  evt.target.reset();
  closePopup(popupPlaceForm);*/
}

//  ESTO ES para el evento SUBMIT UNA VEZ VALIDADO**
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  console.log("holi VOY A SER UN NUEVO PERFIL");
  /*profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  evt.target.reset();
  closePopup(popupProfileForm);*/
}

//Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.FOREACH
forms.forEach((form) => {
  console.log(form.name);
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

profileEditButton.addEventListener("click", openProfilePopup);
addNewPlaceButton.addEventListener("click", openPlacePopup);

newProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

import { Card } from "./card.js";
import {
  profileEditButton,
  openProfilePopup,
  addNewPlaceButton,
  openPlacePopup,
  closeButtons,
  closePopup,
} from "./utils.js";

import { forms, FormValidator } from "./FormValidator.js";
