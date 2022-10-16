//cosntantes para abrir y cerrar popUps popup-newplace
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
//profile
const popupProfileForm = document.querySelector(".popup_type-form-new-profile");
const profileEditButton = document.querySelector(".profile__info-edit-button");
//nuevo lugar
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
const addnewPlaceButton = document.querySelector(".profile__add-button");

const closeNewPlaceForm = document.querySelector(".close-button_for-place");
//Imagen
const popupImage = document.querySelector(".popup_type-image");
const closeImageButton = document.querySelector(".close-button_for-image");
const imageDescription = document.querySelector(".popup__imagedescription");
const image = document.querySelector(".popup__image");
//constantes para llenar formulario
const newProfileForm = document.querySelector(".form");
//New Profile
const nameInput = document.querySelector(".form__input_info-name");
const jobInput = document.querySelector(".form__input_info-occupation");
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");
//NeW Place
const newPlaceForm = document.querySelector(".form_newplace");
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
  const newPlaceCard = TemplatePlace.cloneNode(true);
  newPlaceCard.querySelector(".item__place").src = url;
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
      evt.target.parentNode.remove();
    });

  return newPlaceCard;
}

initialPlacesInfo.forEach((place) => {
  const newItemPlace = newPlace(place.title, place.url);
  placesContainer.prepend(newItemPlace);
});

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector("#title").value;
  const url = document.querySelector("#image").value;
  const newItem = newPlace(title, url);
  placesContainer.prepend(newItem);
  popupPlaceForm.classList.remove("popup_opened");
  evt.target.reset();
}

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
  const imageLegend = event.target.parentElement.getAttribute("description");
  imageDescription.textContent = imageLegend;
  popupImage.classList.add("popup_opened");
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
  popup.classList.remove("popup_opened");
}

//AddEeventListeners para abrir y cerrar popups

profileEditButton.addEventListener("click", handleOpenPopupClick);
addnewPlaceButton.addEventListener("click", handleOpenPopupClick);
placesContainer.addEventListener("click", handleOpenPopupClick);
document.addEventListener("click", handleClosePopupClick);
newProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);
