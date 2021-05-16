import "./index.css";

/*
 Your solution here
 */

function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  const errors = {};

  // check if search term was entered
  if (!validateExists(formData.get("searchTerm"))) {
    errors.searchTerm = "Please enter a search term";
  }

  return errors;
}

const submitHandler = (event) => {
  event.preventDefault();

  // get data entered into the form
  const form = event.target;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  // clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // display new errors
  Object.keys(errors).forEach((key) => {
    // find error element
    const errorElement = document.querySelector("#searchError .error"); // investigate this
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });

  // if there are no errors, create new element with msg
  if (!Object.keys(errors).length) {
    // create new element
    const errorSection = document.createElement("section");

    // add error class
    errorSection.classList.add("error");

    // construct the HTML for this element
    const content = `
    <div class="error" id="searchError">Please enter a search term</div>
    `;

    // set the innerHTML
    errorSection.innerHTML = content;

    //append to the main element
    document.querySelector("main").appendChild(errorSection);
  }
};

const main = () => {
  // get the form element
  const form = document.querySelector("#searchForm");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
