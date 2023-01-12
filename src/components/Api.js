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

  handleEditProfile(value) {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_02/users/me",
      {
        method: "PATCH",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${value.nombre}`,
          about: `${value.ocupación}`,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleAddCard(value) {
    return fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/cards ", {
      method: "POST",
      headers: {
        authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${value.title}`,
        link: `${value.image}`,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleDeleteCard(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_02/cards/${cardId}`,
      {
        method: "DELETE",
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

  handleChangeAvatar(value) {}
}

module.exports = Api;
