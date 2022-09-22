//alert("Hey si estoy funcionando!");
console.log("¡Hola, mundo!");
console.log((142 + 229) * 10 ** 6);
console.log("sky" + "scraper"); //concatenación
console.log(99 + " Red Balloons"); /*concatenación
con números*/

console.log(`El primer poemario 
de Robert Frost fue publicado
en los Estados Unidos en ${1874 + 39 + 2}.`); //Plantillas literales
console.log('Nunca digas "nunca" jamás');

let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(celsius);
console.log(
  `${fahrenheit} degrees Fahrenheit is equal to ${celsius} degrees Celsius.`
);

console.log("123" == 123); // true
console.log("123" === 123); // false

// condicionales if
/* sidejas declarado las dos senctencias if, hallarás un error en la consola
let merry = true;

if (merry) {
  console.log("😃");
} //no hace falta poner punto y cpma después de las sentencias condicionales
*/
let merry = false;

if (merry) {
  console.log("😃");
} else {
  console.log("😐");
}

let stockPrice = 500;

if (stockPrice > 800) {
  console.log("Hora de vender");
} else if (stockPrice > 650) {
  console.log("Aguanta y espera a que el precio suba");
} else if (stockPrice > 500) {
  console.log("Están muy baratas, hay que comprar más acciones");
} else {
  console.log("Vamos con todo");
}

let temperature = 99.9;

if (temperature > 97.6 && temperature <= 99.5) {
  console.log("Todo parece normal.");
} else {
  console.log("¡Ve al médico lo antes posible!");
}

let months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "May",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
// este array contiene todos los meses del año
console.log(months);
console.log(months.length);
console.log(months[0]);
months.pop("");
console.log(months);
months.push("ggg");
console.log(months);
console.log(months[months.length - 1]);
months[9] = "Mi cumpleaños";
months.push("Un mes imaginario");
console.log(months);

const drawers = [
  "bottom drawer",
  "middle drawer",
  "middle-top drawer",
  "top drawer",
];
for (let i = 0; i < drawers.length; i++) {
  console.log(
    "screw together the wood pieces for the " +
      drawers[i] +
      " and install the drawer"
  );
}

let number = 10;

while (number <= 20) {
  console.log(number);
  number += 1;
}

function keepScore(ours, theirs) {
  // Comprobemos si nuestro equipo ha marcado más goles:
  if (ours > theirs) {
    console.log("We won! 😃 The score was " + ours + "-" + theirs);

    // Si no marcamos más goles que ellos,
    // ¿tal vez anotamos la misma cantidad? Compruébalo:
  } else if (ours === theirs) {
    console.log("It's a draw. 😐 The score was " + ours + "-" + theirs);

    // Si no se cumple ninguna de las dos condiciones anteriores,
    // debe significar que marcamos menos goles :(
  } else {
    console.log("We lost... 😢 The score was " + ours + "-" + theirs);
  }
}

let a = 10;
let b = 13;

keepScore(a, b);

let counter = 0;

function increaseCounter() {
  counter++;
}

increaseCounter();
increaseCounter();
increaseCounter();

console.log(counter);

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
    return year + " es un año bisiesto.";
  } else {
    return year + " es un año no bisiesto.";
  }
}

checkResult = isLeapYear(2020);
alert(checkResult);
console.log(checkResult);

let customer = {
  name: "Elise Bouer", // el valor de la propiedad es una cadena
  age: 24, // el valor de la propiedad es un número
  greet: function () {
    // el valor de la propiedad es una función
    console.log("Hello customer!");
  },
};

// función que imprime información sobre el cliente
function printCustomerInfo(person) {
  console.log(person.name + " is " + person.age + " years old.");
}

// llamar a la función anterior
printCustomerInfo(customer);
console.log(printCustomerInfo);

// función que devuelve información sobre el cliente
function getCustomerInfo(person) {
  return "name :" + person.name + ", age: " + person.age;
}
// crear la propiedad "info"
customer.info = getCustomerInfo(customer);
console.log(customer.info);

let page = document.querySelector(".page");
let gallery = page.querySelector(".gallery");
let contentTtems = gallery.querySelectorAll(".item");
console.log(contentTtems);

let profileEditButton = document.querySelector(
  "div.profile__info div.profile__info-edit .profile__info-edit-button"
);

console.log(profileEditButton);

let ImgDescription = document.querySelector(
  "div.gallery div.item .item__place"
);
console.log(ImgDescription);
ImgDescription.hasAttribute("alt");
let beOrNotoBe = ImgDescription.hasAttribute("alt");

console.log(beOrNotoBe);

let profileButton = document.querySelector(" .profile__add-button");

console.log(profileButton);
profileButton.setAttribute("style", "background-color:#ee2");
console.log(profileButton.hasAttribute("style"));
//console.log(profileButton.removeAttribute("style"));
console.log(profileButton.getAttribute("style"));

console.log(profileButton.className);
console.log(profileButton.classList.contains("button"));
profileButton.classList.add("profile__button-container");
console.log(` ${profileButton.classList}`);
profileButton.classList.remove("profile__button-container");
console.log(profileButton.className);
console.log(document.body.innerHTML);
let occupation = document.querySelector(".profile__info-occupation");
console.log(occupation.textContent);
occupation.textContent = "Maestro";
console.log(occupation.textContent);

let profile = document.querySelector(".profile__info");
console.log(profile.textContent);

let heartButton = document.querySelectorAll(".item__place-like-button");
console.log(heartButton);

