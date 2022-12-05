import {
  forms,
  newProfileForm,
  newPlaceForm,
  profileName,
  profileOccupation,
  placesSelector,
  placesContainer,
  initialPlacesInfo,
} from "./const.js";
import Section from "../components/Section.js";
import Card from "./card.js";
//import { Popup, PopupWithForm, PopupWithImage } from "./Popup.js";
import {
  profileEditButton,
  openProfilePopup,
  addNewPlaceButton,
  openPlacePopup,
  closeButtons,
  //closePopup,
  popupList,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import { Popup, PopupWithImage } from "./Popup.js";
function createCard(item, callback, selector) {
  const card = new Card(item, callback, selector);
  return card;
}

const placesList = new Section(
  {
    data: initialPlacesInfo,
    renderer: (item) => {
      const card = createCard(
        item,
        (evt) => {
          const bigImage = new PopupWithImage(".popup_type-image");

          bigImage.open(evt);
        },
        ".template__place"
      );
      const cardElement = card.generateCard();

      placesList.addItem(cardElement);
    },
  },
  placesSelector
);

placesList.renderItems();

/*
function createCard(item, selector) {
  const card = new Card(item, selector);
  return card;
}

const placesList = new Section(
  {
    data: initialPlacesInfo,
    renderer: (item) => {
      const card = createCard(item, ".template__place");
      const cardElement = card.generateCard();
      placesList.addItem(cardElement);
    },
  },
  placesSelector
);

placesList.renderItems();*/
/*
popupList.forEach((popup) => {
  const clases = Array.from(popup.classList);
  const selector = clases.find(function (item) {
    return item.includes("popup_type");
  });
  const currentPopup = new Popup(`.${selector}`);
});*/

/*
function closePopupButtons(button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
}

closeButtons.forEach((button) => {
  closePopupButtons(button);
  button.removeEventListener("click", closePopup);
});*/

/*
function closePopupButtons(button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
}

closeButtons.forEach((button) => {
  closePopupButtons(button);
  button.removeEventListener("click", closePopupButtons(button));
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
});*/

function addEventListeners() {
  profileEditButton.addEventListener("click", openProfilePopup);
  addNewPlaceButton.addEventListener("click", openPlacePopup);
  // newProfileForm.addEventListener("submit", handleProfileFormSubmit);
  // newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);
}

addEventListeners();
