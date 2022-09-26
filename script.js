let profileEditButton = document.querySelector(".profile__info-edit-button");
console.log(profileEditButton);

let popup = document.querySelector(".popup");
console.log(popup);

function handleprofileEditButtonClick() {
  let popup = document.querySelector(".popup");
  console.log(popup);
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", handleprofileEditButtonClick);

let closeButton = document.querySelector(".close-button");

function handleCloseButtonClick() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", handleCloseButtonClick);

let formElement = document.querySelector(".form");
console.log(formElement);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".form__input_info-name");
  console.log(nameInput);
  let jobInput = document.querySelector(".form__input_info-occupation");
  console.log(jobInput);

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  nameInput.value;
  jobInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  let profileName = document.querySelector(".profile__info-name");
  console.log(profileName);
  let profileOccupation = document.querySelector(".profile__info-occupation");
  console.log(profileOccupation);

  // Inserta nuevos valores utilizando el textContent
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  // propiedad del método querySelector()
  nameInput.value = " ";
  jobInput.value = " ";
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener("submit", handleProfileFormSubmit);
