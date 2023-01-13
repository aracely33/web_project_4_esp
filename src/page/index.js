import "./index.css";
import "../images/Headerlogo-min.svg";
/*import "../images/profile-avatar-min.jpg";*/
const constantes = require("../const");
const Section = require("../components/Section");
const Card = require("../components/card");
const openPopup = require("../utils/utils");
const FormValidator = require("../components/FormValidator");
const PopupWithImage = require("../components/PopupWithImage");
const PopupWithForm = require("../components/PopupWithForm");
const UserInfo = require("../components/UserInfo");

const Api = require("../components/Api");
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
    "Content-Type": "application/json",
  },
});

const ProfileInfo = new UserInfo(
  ".profile__info-name",
  ".profile__info-occupation",
  ".profile__avatar-container"
);

api.getUserInfo().then((json) => {
  ProfileInfo.setUserInfo(json);
});

function createCard(
  item,
  callback,
  selector,
  handleTrashButton,
  handleLikeButtonClick
) {
  const card = new Card(
    item,
    callback,
    selector,
    handleTrashButton,
    handleLikeButtonClick
  );
  return card;
}

//Para lugares iniciales
const placesList = new Section(
  {
    /*data: constantes.initialPlacesInfo,*/
    renderer: (item) => {
      const owner = "006f3087a8e18511dd8656b8";
      if (item.owner._id === owner) {
        const card = createCard(
          item,
          (evt) => {
            const bigImage = new PopupWithImage(".popup_type-image");
            bigImage.open(evt);
          },
          ".template__place",
          (evt) => {
            const deleteCardAskPopupForm = new PopupWithForm({
              popupSelector: ".popup_type-form-delete-card-ask",
              handleFormSubmit: () => {
                api.handleDeleteCard(item._id).then((res) => {
                  evt.target.parentElement.remove();
                });
              },
            });

            openPopup(deleteCardAskPopupForm);
          },
          (evt) => {
            evt.target.classList.toggle("item__place-like-button_active");
            console.log(
              evt.target.classList.contains("item__place-like-button_active")
            );
            console.log(item._id);
          }
        );

        const cardElement = card.generateCard();
        placesList.addItem(cardElement);
      } else {
        const noOwnwerCard = createCard(
          item,
          (evt) => {
            const bigImage = new PopupWithImage(".popup_type-image");

            bigImage.open(evt);
          },
          ".template__place",
          (evt) => {
            console.log(evt.target);
          },
          (evt) => {
            console.log(evt.target);
            console.log(item._id);
          }
        );

        const cardElement = noOwnwerCard.generateCard();
        const itemCard = cardElement.querySelector(".item");
        const trashButton = cardElement.querySelector(".item__trash-button");
        itemCard.removeChild(trashButton);
        placesList.addItem(cardElement);
      }
    },
  },
  constantes.placesSelector
);

const result = api.getInitialCards().then((json) => {
  const cards = json.map((item) => {
    return { ...item, title: item.name, url: item.link };
  });
  placesList.setItems(cards);
  placesList.renderItems();
});

//////Nueva instancia de PopUpForm para el perfil

const profilePopupForm = new PopupWithForm({
  popupSelector: ".popup_type-form-new-profile",
  handleFormSubmit: (value) => {
    const profileValues = api.handleEditProfile(value).then((res) => {
      api.getUserInfo().then((json) => {
        ProfileInfo.setUserInfo(json);
      });
    });
  },
});

////////
//////Nueva instancia de PopUpForm para el lugar

const placePopupForm = new PopupWithForm({
  popupSelector: ".popup_type-form-new-place",
  handleFormSubmit: (value) => {
    const cardValues = api.handleAddCard(value).then((res) => {
      const newCard = createCard(
        { ...res, title: res.name, url: res.link },
        (evt) => {
          const bigImage = new PopupWithImage(".popup_type-image");
          bigImage.open(evt);
        },
        ".template__place"
      );
      const cardElement = newCard.generateCard();
      const gallery = document.querySelector(constantes.placesSelector);
      gallery.prepend(cardElement);
    });
  },
});

////intancia para cambiar de avatar

const changeAvatarPopupForm = new PopupWithForm({
  popupSelector: ".popup_type-form-change-profile-avatar",
  handleFormSubmit: (value) => {
    console.log(value);
  },
});

//Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.FOREACH
constantes.forms.forEach((form) => {
  const validate = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible",
    },
    form
  );
  validate.enableValidation();
});

function openPlaceFormPopup() {
  openPopup(placePopupForm);
}
function openProfileFormPopup() {
  openPopup(profilePopupForm);
}

function openQuestionFormPopup() {
  openPopup(changeAvatarPopupForm);
}

function addEventListeners() {
  constantes.profileEditButton.addEventListener("click", openProfileFormPopup);
  constantes.addNewPlaceButton.addEventListener("click", openPlaceFormPopup);
  constantes.avatarEditButton.addEventListener("click", openQuestionFormPopup);
}

addEventListeners();
