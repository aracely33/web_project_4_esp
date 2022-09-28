const profileEditButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
const formElement = document.querySelector(".form");

function handleprofileEditButtonClick() {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup_opened");
}

function handleCloseButtonClick() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".form__input_info-name");
  const jobInput = document.querySelector(".form__input_info-occupation");
  nameInput.value;
  jobInput.value;

  const profileName = document.querySelector(".profile__info-name");
  const profileOccupation = document.querySelector(".profile__info-occupation");

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  handleCloseButtonClick();
}

profileEditButton.addEventListener("click", handleprofileEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
formElement.addEventListener("submit", handleProfileFormSubmit);
