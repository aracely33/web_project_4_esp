const initialPlacesInfo = [
  {
    title: "Valle de Yosemite",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
const placesContainer = document.querySelector(".gallery");

class Card {
  constructor(data, selector) {
    this._title = data.title;
    this._image = data.url;
    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector) // aquí debe ir this._cardSelector
      .content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".item__place").src = this._image;
    this._element.querySelector(".item__place-info-name").textContent =
      this._title;
    return this._element;
  }
}

initialPlacesInfo.forEach((item) => {
  const card = new Card(item, ".template__place");
  const cardElement = card.generateCard();

  // Añadir al DOM
  document.querySelector(".gallery").append(cardElement);
});

/*const titleImage = document.querySelector("#title");
const urlImage = document.querySelector("#image");

function createCard(title, url) {
const newPlaceCard = templatePlace.cloneNode(true);
const cardImage = newPlaceCard.querySelector(".item__place");
cardImage.src = url;
cardImage.alt = title;
newPlaceCard.querySelector(".item__place-info-name").textContent = title;
newPlaceCard.setAttribute("description", title);
newPlaceCard
  .querySelector(".item__place-like-button")
  .addEventListener("click", function (evt) {
    evt.target.classList.toggle("item__place-like-button_active");
  });

newPlaceCard
  .querySelector(".item__trash-button")
  .addEventListener("click", function (evt) {
    evt.target.closest(".item").remove();
  });
newPlaceCard
  .querySelector(".item__place")
  .addEventListener("click", function (evt) {
    handleBigImageAppear(evt);
  });

return newPlaceCard;
}

initialPlacesInfo.forEach((place) => {
const newItemPlace = createCard(place.title, place.url);
placesContainer.prepend(newItemPlace);
});*/

/* aquí se le agrga la inatancia a  cada (initialPlacesInfo) °w° initialPlacesInfo.forEach((item) => {
    const card = new Card(item.title, item.description, item.price, item.image);
    const cardElement = card.generateCard();
  
    // Añadir al DOM
    document.querySelector(".card-list__items").append(cardElement);
  });






*/
