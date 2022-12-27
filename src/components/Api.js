class Api {
  constructor(options) {
    console.log(options);
  }

  getInitialCards() {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_03/cards", {
      headers: {
        authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  // otros métodos para trabajar con la API
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03",
  headers: {
    authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
    "Content-Type": "application/json",
  },
});

module.exports = Api;
