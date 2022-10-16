//cosntantes para abrir y cerrar popUps
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
//profile
const popupProfileForm = document.querySelector(".popup_type-form-new-profile");
const profileEditButton = document.querySelector(".profile__info-edit-button");
//nuevo lugar
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
const AddnewPlaceButton = document.querySelector(".profile__add-button");

const closeNewPlaceForm = document.querySelector(".close-button_for-place");
//Imagen
const popupImage = document.querySelector(".popup_type-image");
const closeImageButton = document.querySelector(".close-button_for-image");
const imageDescription = document.querySelector(".popup__imagedescription");
const image = document.querySelector(".popup__image");
//constantes para llenar formulario
const formElement = document.querySelector(".form");
//New Profile
const nameInput = document.querySelector(".form__input_info-name");
const jobInput = document.querySelector(".form__input_info-occupation");
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");
//NeW Place
const NewPlaceForm = document.querySelector(".form_newplace");
const newPlaceSubmitButton = document.querySelector(".form__Button_save-place");
const placesContainer = document.querySelector(".gallery");

const TemplatePlace = document
  .querySelector(".template__place")
  .content.querySelector(".item");

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

function newPlace(title, url) {
  const newPlace = TemplatePlace.cloneNode(true);
  newPlace.querySelector(".item__place").src = url;
  newPlace.querySelector(".item__place-info-name").textContent = title;
  newPlace.setAttribute("description", title);
  newPlace
    .querySelector(".item__place-like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("item__place-like-button_active");
    });
  newPlace
    .querySelector(".item__trash-button")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.remove();
    });

  return newPlace;
}

initialPlacesInfo.forEach((place) => {
  const NewItem = newPlace(place.title, place.url);
  placesContainer.prepend(NewItem);
});

//funciones para abrir y cerrar popUps

function handleOpenPopupClick(evt) {
  if (evt.target.classList.contains("profile__info-edit-button")) {
    popupProfileForm.classList.add("popup_opened");
  } else if (evt.target.classList.contains("profile__add-button")) {
    popupPlaceForm.classList.add("popup_opened");
  } else if (evt.target.tagName === "IMG") {
    handleBigImageAppear(evt);
  }
}

function handleBigImageAppear(event) {
  event.target.title = imageDescription.textContent;
  image.src = event.target.src;
  popupImage.classList.add("popup_opened");
  const ImgDescription = event.target.parentElement.getAttribute("description");
  imageDescription.textContent = ImgDescription;
}

function handleClosePopupClick(evt) {
  if (evt.target.classList.contains("close-button")) {
    popupImage.classList.remove("popup_opened");
    popupProfileForm.classList.remove("popup_opened");
    popupPlaceForm.classList.remove("popup_opened");
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  popupProfileForm.classList.remove("popup_opened");
}

//AddEeventListeners para abrir y cerrar popups

profileEditButton.addEventListener("click", handleOpenPopupClick);
AddnewPlaceButton.addEventListener("click", handleOpenPopupClick);
placesContainer.addEventListener("click", handleOpenPopupClick);
document.addEventListener("click", handleClosePopupClick);
formElement.addEventListener("submit", handleProfileFormSubmit);
//NewPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

/*




function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector("#title").value;
  const url = document.querySelector("#image").value;
  const NewItem = newPlace(title, url);
  placesContainer.prepend(NewItem);
  newPlacePopup.classList.remove("popup-newplace_show");
  evt.target.reset();
}
*/

/*function handleClickPlaces(event) {
  if (event.target.tagName === "IMG") {
    event.target.title = popupImage.querySelector(
      ".popup__imagedescription"
    ).textContent;
    popupImage.querySelector(".popup__image").src = event.target.src;
    popupImage.classList.add("popup_opened");
    const ImgDescription =
      event.target.parentElement.getAttribute("description");
    document.querySelector(".popup__imagedescription").textContent =
      ImgDescription;
  }
}*/
