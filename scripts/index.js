import {
  forms,
  newProfileForm,
  newPlaceForm,
  profileName,
  profileOccupation,
  placesContainer,
  initialPlacesInfo,
} from "./const.js";

import Card from "./card.js";
import {
  profileEditButton,
  openProfilePopup,
  addNewPlaceButton,
  openPlacePopup,
  closeButtons,
  closePopup,
} from "./utils.js";

import FormValidator from "./FormValidator.js";

function createCard(item, selector) {
  const card = new Card(item, selector);
  return card;
}

function renderCard(item) {
  const card = createCard(item, ".template__place");
  const cardElement = card.generateCard();
  document.querySelector(".gallery").append(cardElement);
  return cardElement;
}

/*Serpara la logica de creacion de la logica de renderizado, 
Deberias de tener una funcion que se encargue de crear el elemento y otra que se encargue de renderizarlo
 initialPlacesInfo.forEach((item) => {
    renderCard(item)
}*/
function closePopupButtons(button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
}

initialPlacesInfo.forEach((item) => {
  renderCard(item);
});

closeButtons.forEach((button) => {
  closePopupButtons(button);
  button.removeEventListener("click", closePopupButtons(button));
}); /*Aisla lo que hace este foreach en una funcion aparte,
 y asi poder reutilizarla*/

export function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const data = {
    title: `${evt.target.elements.title.value}`,
    url: `${evt.target.elements.image.value}`,
  };
  const newCard = new Card(data, ".template__place");
  const newPlace = newCard.generateCard();
  placesContainer.prepend(newPlace);
  evt.target.reset();
  closePopup(evt.target.closest(".popup"));
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = evt.target.elements.nombre.value;
  profileOccupation.textContent = evt.target.elements.ocupación.value;
  evt.target.reset();
  closePopup(evt.target.closest(".popup"));
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

profileEditButton.addEventListener("click", openProfilePopup);
addNewPlaceButton.addEventListener("click", openPlacePopup);

newProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);
