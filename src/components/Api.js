class Api {
  constructor(options) {
    this.options = options;
  }

  getUserInfo() {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/users/me", {
      headers: {
        authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((UserInfo) => {
        console.log(UserInfo);
        document.querySelector(".profile__info-name").textContent =
          UserInfo.name;

        document.querySelector(".profile__info-occupation").textContent =
          UserInfo.about;

        document.querySelector(
          ".profile__avatar-container"
        ).style.backgroundImage = `url(${UserInfo.avatar})`;
      });
  }

  getInitialCards() {
    const array = fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_02/cards",
      {
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        console.log(result);
        result.forEach((element) => {
          console.log(element.name);
          console.log(element.link);
        });
      });
  }

  // otros métodos para trabajar con la API
}

/*
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
    "Content-Type": "application/json",
  },
});

api.getUserInfo();

const loadCardsArr = () => {
  const answer = api.getInitialCards();
  console.log(answer);
};

loadCardsArr();*/

module.exports = Api;
