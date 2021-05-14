import "./styles.css";

/**
  Write the addheadings() function here -> <article><h2>Article 1</h2></article>.
*/
function addHeadings() {
  // add new element
  const articles = document.querySelectorAll("article");

  for (let article of articles) {
    // create new h2 element
    const newElement = document.createElement("h2");

    // append new h2 element
    article.appendChild(newElement);
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll("article");

  for (let article of articles) {
    let content = article.innerText;
    content.includes("Article")
      ? article.classList.add("article")
      : article.classList.add("tutorial");
  }
}
/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials() {
  const articles = document.querySelectorAll("article");
  const newSection = document.createElement("section");

  // clean up old section
  for (let article of articles) {
    let content = article.innerText;
    content.includes("Article")
      ? article.classList.add("article")
      : article.remove();
  }
  // tutorials section
  const body = document.querySelector("body");

  // Create new Div and class
  const newDiv = document.createElement("div");
  newDiv.classList.add("container");

  // append div to body
  body.appendChild(newDiv);

  // new header and append to div
  const newHeader = document.createElement("header");
  newDiv.appendChild(newHeader);

  //new h1 element and append to header
  const newH1 = document.createElement("h1");
  newHeader.appendChild(newH1);

  // add tutorials attribute
  let content = newH1.innerText;
  content = content + "Tutorials";
  newH1.innerHTML = content;

  // // clone node
  Array.from(articles).forEach((article) => {
    if (article.innerHTML.includes("Tutorial")) {
      let clone = article.cloneNode(true);
      newSection.appendChild(clone);
    }
  });

  // add section and class

  newSection.classList.add("tutorials");

  // append parent and children
  newDiv.appendChild(newSection);
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
