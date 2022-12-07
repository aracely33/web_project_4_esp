import {
  forms,
  newProfileForm,
  newPlaceForm,
  profileName,
  profileOccupation,
  placesSelector,
  placesContainer,
  initialPlacesInfo,
  profileSelector,
} from "./const.js";
import Section from "../components/Section.js";
import Card from "./card.js";
//import { Popup, PopupWithForm, PopupWithImage } from "./Popup.js";
import {
  openPopup,
  profileEditButton,
  //openPlaceFormPopup,
  addNewPlaceButton,
  //openProfileFormPopup,
  closeButtons,
  popupList,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import { Popup, PopupWithForm, PopupWithImage } from "./Popup.js";
import UserInfo from "./UserInfo.js";
function createCard(item, callback, selector) {
  const card = new Card(item, callback, selector);
  return card;
}
//Para lugars iniiales
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

//Función global de PopupWithForm
function handleFormSubmit(value, callback) {
  callback(value);
}

//callback para agregar nuevo lugar
function addNewPlace(value) {
  const morePlaces = [
    {
      title: value.title,
      url: value.image,
    },
  ];
  const newPlacesList = new Section(
    {
      data: morePlaces,
      renderer: (item) => {
        const card = createCard(
          item,
          (evt) => {
            const bigImage = new PopupWithImage(".popup_type-image");
          },
          ".template__place"
        );
        const cardElement = card.generateCard();

        newPlacesList.addItem(cardElement);
      },
    },
    placesSelector
  );
  newPlacesList.renderItems();
}
//callback para agregar nuevo perfil

function addNewProfile(value) {
  const newProfile = [
    {
      nombre: value.nombre,
      ocupación: value.ocupación,
    },
  ];
  const profile = new Section(
    {
      data: newProfile,
      renderer: (item) => {
        const ProfileInfo = new UserInfo(
          ".profile__info-name",
          ".profile__info-occupation"
        );
        const infoElement = ProfileInfo.setUserInfo(item);
        profile.addItem(infoElement);
      },
    },
    ".profile__info"
  );
  profile.renderItems();
}

//Manejadores Finales**Mejora el nombre
function handleNewPlaceFormSubmit(value) {
  handleFormSubmit(value, addNewPlace);
}

function handleNewProfileFormSubmit(value) {
  handleFormSubmit(value, addNewProfile);
}

//////
const placePopupForm = new PopupWithForm(
  ".popup_type-form-new-place",
  handleNewPlaceFormSubmit
);

//

const profilePopupForm = new PopupWithForm(
  ".popup_type-form-new-profile",
  handleNewProfileFormSubmit
);
////////

function openPlaceFormPopup() {
  openPopup(placePopupForm);
}
function openProfileFormPopup() {
  openPopup(profilePopupForm);
}

/*

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = evt.target.elements.nombre.value;
  profileOccupation.textContent = evt.target.elements.ocupación.value;
  evt.target.reset();
  closePopup(evt.target.closest(".popup"));
}*/

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

function addEventListeners() {
  profileEditButton.addEventListener("click", openProfileFormPopup);
  addNewPlaceButton.addEventListener("click", openPlaceFormPopup);
  //newProfileForm.addEventListener("submit", handleFormSubmit);
  //newPlaceForm.addEventListener("submit", handleFormSubmit);
}

addEventListeners();
