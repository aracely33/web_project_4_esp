const popupList = document.querySelectorAll(".popup");
const popupOpened = document.querySelector(".popup_opened");
const closeButtons = document.querySelectorAll(".close-button");
const popupProfileForm = document.querySelector(".popup_type-form-new-profile");
const profileEditButton = document.querySelector(".profile__info-edit-button");
const popupPlaceForm = document.querySelector(".popup_type-form-new-place");
const addNewPlaceButton = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup_type-image");
const imageDescription = document.querySelector(".popup__imagedescription");
const image = document.querySelector(".popup__image");
const newProfileForm = document.forms.form;
const nameInput = document.forms.form.nombre;
const jobInput = document.forms.form.ocupación;
const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");
const newPlaceForm = document.forms.formPlace;
const placesContainer = document.querySelector(".gallery");
const templatePlace = document
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
  const newPlaceCard = templatePlace.cloneNode(true);
  const cardImage = newPlaceCard.querySelector(".item__place");
  cardImage.src = url;
  cardImage.alt = title;
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

function openImagePopup() {
  openPopup(popupImage);
}
function openPlacePopup() {
  openPopup(popupPlaceForm);
}
function openProfilePopup() {
  openPopup(popupProfileForm);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("click", handleTap);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleKeyPress);
  document.removeEventListener("click", handleTap);
}

function handleBigImageAppear(evt) {
  openImagePopup();
  evt.target.title = imageDescription.textContent;
  const imageLegend = evt.target.closest(".item").getAttribute("description");
  image.src = evt.target.src;
  image.alt = imageLegend;
  imageDescription.textContent = imageLegend;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupProfileForm);
}

function handleKeyPress(evt) {
  popupList.forEach((element) => {
    if (evt.key === "Escape") {
      closePopup(element);
    }
  });
}

function handleTap(evt) {
  popupList.forEach((element) => {
    const tap = evt.target.classList.contains("popup");
    if (tap) {
      closePopup(element);
    }
  });
}

profileEditButton.addEventListener("click", openProfilePopup);
addNewPlaceButton.addEventListener("click", openPlacePopup);
newProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);
