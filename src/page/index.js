import "./index.css";
import "../images/Headerlogo-min.svg";
import "../images/profile-avatar-min.jpg";
import { info } from "autoprefixer";
const constantes = require("../const");
const Section = require("../components/Section");
const Card = require("../components/card");
const openPopup = require("../utils/utils");
const FormValidator = require("../components/FormValidator");
const PopupWithImage = require("../components/PopupWithImage");
const PopupWithForm = require("../components/PopupWithForm");
const UserInfo = require("../components/UserInfo");
const Api = require("../components/Api");
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
    "Content-Type": "application/json",
  },
});

api.getUserInfo();

/*
const initialUserInfo = new Section(
  {
    data: api.getUserInfo(),
    renderer: (item) => {
      const ProfileInfo = new UserInfo(
        ".profile__info-name",
        ".profile__info-occupation"
      );
      const infoElement = ProfileInfo.setUserInfo(item);
    },
  },
  constantes.profileSelector
);
//
initialUserInfo.renderItems();*/

/*
function createCard(item, callback, selector) {
  const card = new Card(item, callback, selector);
  return card;
}

//Para lugaress iniciales

const placesList = new Section(
  {
    data: constantes.initialPlacesInfo, //aqui
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
  constantes.placesSelector //auí
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
      constantes.profileSelector
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
      constantes.placesSelector
    );
    newPlacesList.renderItems();
  },
});

//Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.FOREACH
constantes.forms.forEach((form) => {
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
  constantes.profileEditButton.addEventListener("click", openProfileFormPopup);
  constantes.addNewPlaceButton.addEventListener("click", openPlaceFormPopup);
}

addEventListeners();
*/
