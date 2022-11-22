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

initialPlacesInfo.forEach((item) => {
  const card = new Card(item, ".template__place");
  const cardElement = card.generateCard();

  document.querySelector(".gallery").append(cardElement);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

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
