/*const popupList = document.querySelectorAll(".popup"); //utils.js
const popupOpened = document.querySelector(".popup_opened"); //utils.js
const closeButtons = document.querySelectorAll(".close-button"); //utils.js
const popupProfileForm = document.querySelector(".popup_type-form-new-profile"); //utils.js
const profileEditButton = document.querySelector(".profile__info-edit-button"); //utils.js
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
const addNewPlaceButton = document.querySelector(".profile__add-button"); //utils.js
const popupImage = document.querySelector(".popup_type-image"); //utils.js
const imageDescription = document.querySelector(".popup__imagedescription"); //utils.js
const image = document.querySelector(".popup__image");*/ //utils.js
const newProfileForm = document.forms.form;
const nameInput = document.forms.form.nombre;
const jobInput = document.forms.form.ocupación;
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");
const newPlaceForm = document.forms.formPlace;
const placesContainer = document.querySelector(".gallery");

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

/*
const titleImage = document.querySelector("#title");
const urlImage = document.querySelector("#image");

function createCard(title, url) {
  const newPlaceCard = templatePlace.cloneNode(true);
  const cardImage = newPlaceCard.querySelector(".item__place");
  cardImage.src = url;
  cardImage.alt = title;ESTO VA SER IMPORTANTE DESPUÉS PARA EL POPUP
  newPlaceCard.querySelector(".item__place-info-name").textContent = title;
  newPlaceCard.setAttribute("description", title);
  newPlaceCard
    .querySelector(".item__place-like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("item__place-like-button_active");
    });

  newPlaceCard
    .querySelector(".item__trash-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".item").remove();
    });
  newPlaceCard
    .querySelector(".item__place")
    .addEventListener("click", function (evt) {
      handleBigImageAppear(evt);
    });

  return newPlaceCard;
}

initialPlacesInfo.forEach((place) => {
  const newItemPlace = createCard(place.title, place.url);
  placesContainer.prepend(newItemPlace);
});*/

/*function handleNewPlaceFormSubmit(evt) {//  ESTO ES PARA LA VALIDACIÓN
  evt.preventDefault();
  const newItem = createCard(titleImage.value, urlImage.value);
  placesContainer.prepend(newItem);
  evt.target.reset();
  closePopup(popupPlaceForm);
}*/

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

profileEditButton.addEventListener("click", openProfilePopup);
addNewPlaceButton.addEventListener("click", openPlacePopup);
//newProfileForm.addEventListener("submit", handleProfileFormSubmit);
//newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

import { Card } from "./card.js";
import {
  profileEditButton,
  openProfilePopup,
  addNewPlaceButton,
  openPlacePopup,
  closeButtons,
  closePopup,
} from "./utils.js";
