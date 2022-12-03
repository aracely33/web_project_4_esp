import { Popup, PopupWithImage, PopupWithForm } from "./Popup.js";
const popupList = document.querySelectorAll(".popup");
export const closeButtons = document.querySelectorAll(".close-button");
export const popupProfileForm = document.querySelector(
  ".popup_type-form-new-profile"
);
export const profileEditButton = document.querySelector(
  ".profile__info-edit-button"
);
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
export const addNewPlaceButton = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup_type-image");
const imageDescription = document.querySelector(".popup__imagedescription");
const image = document.querySelector(".popup__image");

function openImagePopup() {
  openPopup(popupImage);
}

export function openPlacePopup() {
  openWithForm(".popup_type-form-new-place");
}
export function openProfilePopup() {
  openWithForm(".popup_type-form-new-profile");
}

function openWithForm(selector) {
  const popupForm = new PopupWithForm(selector);
  popupForm.open();
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  //document.removeEventListener("keydown", handleKeyPress);
  //document.removeEventListener("click", handleTap);
}

export function handleBigImageAppear(evt) {
  openImagePopup();
  const imageLegend = evt.target.alt;
  image.src = evt.target.src;
  imageDescription.textContent = imageLegend;
}

/*function openPopup() {
 ;
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("click", handleTap);
}*/

/*
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
*/
