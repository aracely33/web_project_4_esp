const profileEditButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
const formElement = document.querySelector(".form");
//declarar al contenedor de los items con las imágenes
const placesContainer = document.querySelector(".gallery");
console.log(placesContainer); //Borrar esto
//Buscar el esqueleto del nuevo lugar en template__place
const TemplatePlace = document
  .querySelector(".template__place")
  .content.querySelector(".item");
console.log(TemplatePlace); //borrar esto

const initialPlacesInfo = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//vamos a iterar initialPlacesInfo
initialPlacesInfo.forEach((place) => {
  //generar item
  const newPlace = TemplatePlace.cloneNode(true);
  //llenar la información
  newPlace.querySelector(".item__place").src = place.link;
  newPlace.querySelector(".item__place-info-name").textContent = place.name;
  //agregar a la gallería o placesContainer
  placesContainer.prepend(newPlace);
});

function handleprofileEditButtonClick() {
  let popup = document.querySelector(".popup");
  console.log(popup);
  popup.classList.add("popup_opened");
}

function handleCloseButtonClick() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".form__input_info-name");
  console.log(nameInput);
  let jobInput = document.querySelector(".form__input_info-occupation");
  console.log(jobInput);

  nameInput.value;
  jobInput.value;

  let profileName = document.querySelector(".profile__info-name");
  console.log(profileName);
  let profileOccupation = document.querySelector(".profile__info-occupation");
  console.log(profileOccupation);

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  handleCloseButtonClick();
}

profileEditButton.addEventListener("click", handleprofileEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
formElement.addEventListener("submit", handleProfileFormSubmit);
