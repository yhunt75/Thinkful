// // view the entire HTML document
// console.log(document);

// // find an <h1> element
// const heading = document.querySelector("h1");
// console.log(heading);

// // find an element with the class "value"
// const elem01 = document.querySelector(".value");
// console.log(elem01);

// // find a <button>
// const elem02 = document.querySelector("button");
// console.log(elem02);

// // find an element with class "area"
// const elem03 = document.querySelector(".area-display");
// console.log(elem03);

// // find an <div> that  is a descendant of class "stat"
// const elem04 = document.querySelector(".stat div");
// console.log(elem04);

// // find an element with class "hello"
// const elem05 = document.querySelector(".hello");
// console.log(elem05); // null because it does not exist

// // find all buttons
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// // iterate over the NodeList of buttons
// for (let element of buttons.values()) {
//   console.log(element);
// }

// // find all h3
// const heading3List = document.querySelectorAll("h3");

// // iterate over entire list
// for (let element of heading3List.values()) {
//   console.log(element);
// }

// // another way to iterate
// for (let i = 0; i < heading3List.length; i++) {
//   const element = heading3List[i];
//   console.log(element);
// }

// // find all divs containing ratings
// const ratings = document.querySelectorAll(".rating-display .value");

// // iterate over entire list
// for (let element of ratings.values()) {
//   console.log(element);
// }

// // find all divs containing areas
// const areas = document.querySelectorAll(".area-display .value");

// for (let i = 0; i < areas.length; i++) {
//   const element = areas[i];
//   console.log(element);
// }

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
  }
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");

header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);
