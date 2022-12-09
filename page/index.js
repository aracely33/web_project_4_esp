import {
  forms,
  placesSelector,
  initialPlacesInfo,
  profileSelector,
  addNewPlaceButton,
  profileEditButton,
} from "../utils/const.js";
import Section from "../components/Section.js";
import Card from "../components/card.js";
import { openPopup } from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithform.js";
import UserInfo from "../components/UserInfo.js";
function createCard(item, callback, selector) {
  const card = new Card(item, callback, selector);
  return card;
}
//Para lugaress iniciales

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

//////Nueva instancia de PopUpForm para el perfil

const profilePopupForm = new PopupWithForm({
  popupSelector: ".popup_type-form-new-profile",
  handleFormSubmit: (value) => {
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
        },
      },
      profileSelector
    );
    //
    profile.renderItems();
  },
});
////////

//////Nueva instancia de PopUpForm para el lugar

const placePopupForm = new PopupWithForm({
  popupSelector: ".popup_type-form-new-place",
  handleFormSubmit: (value) => {
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
  },
});

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

function openPlaceFormPopup() {
  openPopup(placePopupForm);
}
function openProfileFormPopup() {
  openPopup(profilePopupForm);
}

function addEventListeners() {
  profileEditButton.addEventListener("click", openProfileFormPopup);
  addNewPlaceButton.addEventListener("click", openPlaceFormPopup);
}

addEventListeners();
