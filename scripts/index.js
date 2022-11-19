const newProfileForm = document.forms.form;
const newPlaceForm = document.forms.formPlace;
/*const nameInput = document.forms.form.nombre;
const jobInput = document.forms.form.ocupación;
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");*/
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

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

export function handleNewPlaceFormSubmit(evt) {
  //  ESTO ES para el evento SUBMIT UNA VEZ VALIDADO**
  evt.preventDefault();
  console.log("holi SOY UN NUEVO LUGAR");
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
/*
import {
  handleNewPlaceFormSubmit,
  handleProfileFormSubmit,
} from "./FormValidator.js";
*/
