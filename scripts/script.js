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

  nameInput.value;
  jobInput.value;

  let profileName = document.querySelector(".profile__info-name");
  console.log(profileName);
  let profileOccupation = document.querySelector(".profile__info-occupation");
  console.log(profileOccupation);

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
