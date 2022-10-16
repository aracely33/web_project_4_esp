//cosntantes para abrir y cerrar popUps popup-newplace
const popup = document.querySelector(".popup");
//const closeButton = document.querySelector(".close-button");
const closeButtons = document.querySelectorAll(".close-button");

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

const titleImage = document.querySelector("#title");
const urlImage = document.querySelector("#image");

function createCard(title, url) {
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
      evt.target.closest(".item").remove();
    });

  return newPlaceCard;
}

initialPlacesInfo.forEach((place) => {
  const newItemPlace = createCard(place.title, place.url);
  placesContainer.prepend(newItemPlace);
});

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newItem = createCard(titleImage.value, urlImage.value);
  placesContainer.prepend(newItem);
  closePopup(popupPlaceForm);
  evt.target.reset();
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function handleOpenPopupClick(evt) {
  if (evt.target.classList.contains("profile__info-edit-button")) {
    openPopup(popupProfileForm);
  } else if (evt.target.classList.contains("profile__add-button")) {
    openPopup(popupPlaceForm);
  } else if (evt.target.tagName === "IMG") {
    handleBigImageAppear(evt);
  }
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleBigImageAppear(event) {
  event.target.title = imageDescription.textContent;
  image.src = event.target.src;
  const imageLegend = event.target.parentElement.getAttribute("description");
  imageDescription.textContent = imageLegend;
  openPopup(popupImage);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popup);
}

//AddEeventListeners para abrir y cerrar popups

profileEditButton.addEventListener("click", handleOpenPopupClick);
addnewPlaceButton.addEventListener("click", handleOpenPopupClick);
document.addEventListener("click", handleOpenPopupClick);
newProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);
