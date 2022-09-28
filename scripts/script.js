const profileEditButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
const formElement = document.querySelector(".form");

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
