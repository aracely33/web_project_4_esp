const popupList = document.querySelectorAll(".popup"); //utils.js
const popupOpened = document.querySelector(".popup_opened"); //utils.js
export const closeButtons = document.querySelectorAll(".close-button"); //utils.js
export const popupProfileForm = document.querySelector(
  ".popup_type-form-new-profile"
); //utils.js
export const profileEditButton = document.querySelector(
  ".profile__info-edit-button"
); //utils.js
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
export const addNewPlaceButton = document.querySelector(".profile__add-button"); //utils.js
const popupImage = document.querySelector(".popup_type-image"); //utils.js
const imageDescription = document.querySelector(".popup__imagedescription"); //utils.js
const image = document.querySelector(".popup__image"); //utils.js

/*
function openImagePopup() {
  openPopup(popupImage);
}*/

export function openPlacePopup() {
  openPopup(popupPlaceForm);
}
export function openProfilePopup() {
  openPopup(popupProfileForm);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("click", handleTap);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleKeyPress);
  document.removeEventListener("click", handleTap);
}

/*
function handleBigImageAppear(evt) {
  openImagePopup();
  evt.target.title = imageDescription.textContent;
  const imageLegend = evt.target.closest(".item").getAttribute("description");
  image.src = evt.target.src;
  image.alt = imageLegend;
  imageDescription.textContent = imageLegend;
}*/

/* ESTO ES PARA LA VALIDACIÓN
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  evt.target.reset();
  closePopup(popupProfileForm);
}*/

function handleKeyPress(evt) {
  if (evt.key === "Escape") {
    popupList.forEach(closePopup);
  }
}

function handleTap(evt) {
  const tap = evt.target.classList.contains("popup");
  if (tap) {
    popupList.forEach(closePopup);
  }
}
