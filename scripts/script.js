//Botón de profileedit
const profileEditButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const newPlacePopup = document.querySelector(".popup-newplace");

const closeButton = document.querySelector(".close-button");

const closeNewPlaceForm = document.querySelector(".close-button_for-place");

const formElement = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_info-name");
const jobInput = document.querySelector(".form__input_info-occupation");

const profileName = document.querySelector(".profile__info-name");
const profileOccupation = document.querySelector(".profile__info-occupation");

const newPlaceSubmitButton = document.querySelector(".form__Button_save-place");
console.log(newPlaceSubmitButton);

const AddnewPlaceButton = document.querySelector(".profile__add-button");
const NewPlaceForm = document.querySelector(".form_newplace");

//declarar al contenedor de los items con las imágenes
const placesContainer = document.querySelector(".gallery");
//Buscar el esqueleto del nuevo lugar en template__place
const TemplatePlace = document
  .querySelector(".template__place")
  .content.querySelector(".item");
console.log(TemplatePlace); //borrar esto

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
  return newPlace;
}

initialPlacesInfo.forEach((place) => {
  const NewItem = newPlace(place.title, place.url);
  placesContainer.prepend(NewItem);
});

function handleprofileEditButtonClick() {
  popup.classList.add("popup_opened");
}

function handleCloseButtonClick() {
  popup.classList.remove("popup_opened");
}
function handleCloseFormPlaceButtonClick() {
  newPlacePopup.classList.remove("popup-newplace_show");
}

function handleAddPlaceButtonClick() {
  newPlacePopup.classList.add("popup-newplace_show");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  handleCloseButtonClick();
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector("#title").value;
  const url = document.querySelector("#image").value;

  const NewItem = newPlace(title, url);
  placesContainer.prepend(NewItem);

  newPlacePopup.classList.remove("popup-newplace_show");

  evt.target.reset();
}

AddnewPlaceButton.addEventListener("click", handleAddPlaceButtonClick);
profileEditButton.addEventListener("click", handleprofileEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
closeNewPlaceForm.addEventListener("click", handleCloseFormPlaceButtonClick);
formElement.addEventListener("submit", handleProfileFormSubmit);

NewPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

//funcionalidad para agregar un nuevo item o lugar
//1.Colocar el evento del formulario
//2.- Mostrar el popup de formulario de newplace
//3.-el ususario pone la información en los campos
//4.-da click en guardar
//form_newplace
