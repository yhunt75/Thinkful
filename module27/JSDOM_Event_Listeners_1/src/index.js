import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  // select all the buttons with the class .expand_button
  const buttons = document.querySelectorAll(".expand_button");

  // for each button, add a click event listener
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // if button clicked === "v"
      if (event.target.textContent.toLowerCase() === "v") {
        // finding node that matches selector string
        event.target.textContent = ">";
        button
          .closest(".article")
          // setting display property = none
          .querySelector(".article_body").style.display = "none";
      } else {
        // else set text to "v"
        event.target.textContent = "V"; // finding node that matches selector string
        button
          .closest(".article")
          // set display property to bock
          .querySelector(".article_body").style.display = "block";
      }
    });
  });
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  // find all buttons with the class .highlightBtn
  const highlightButton = document.querySelectorAll(".highlightBtn");
  // for each button
  highlightButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // find article for clicked button
      const targetArticle = button.closest(".article");
      // if button text is "+"
      if (event.target.textContent === "+") {
        // set button text to "-"
        event.target.textContent = "-";
        // highlight button
        targetArticle.classList.add("highlight");
      } else {
        // else if button text = "+"
        event.target.textContent = "+";
        // remove highlight
        targetArticle.classList.remove("highlight");
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
