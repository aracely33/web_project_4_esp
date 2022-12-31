class Api {
  constructor(options) {
    this.options = options;
  }

  getUserInfo() {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_02/users/me",
      {
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/cards", {
      headers: {
        authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // otros métodos para trabajar con la API
}

module.exports = Api;
