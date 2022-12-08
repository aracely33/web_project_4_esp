import { Popup, PopupWithImage, PopupWithForm } from "../components/Popup.js";
export const popupList = document.querySelectorAll(".popup");
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

export function openPopup(popup) {
  popup.open();
}

/*
export function closePopup(popup) {
  console.log("llamaron a closePopup");
  const clases = Array.from(popup.classList);
  const selector = clases.find(function (item) {
    return item.includes("popup_type");
  });

  const currentPopup = new Popup(`.${selector}`);
  currentPopup.close();
  //popup.classList.remove("popup_opened");
  //document.removeEventListener("keydown", handleKeyPress);
  //document.removeEventListener("click", handleTap);
}*/
