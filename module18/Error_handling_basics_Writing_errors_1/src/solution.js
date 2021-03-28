function secretPasscode(code) {
  let errors = [];
  // if (code.length < 14) console.error("Code is too short!");
  // if (code.length > 14) console.error("Code is too long!");
  // if (!code.includes("-")) console.error("Code is missing a '-'.");
  // if (code !== "jWhyYFh-eTx3qt") console.error("Code is incorrect.");

  // if (errors.length) console.error(errors);

  if (code.length < 14) { 
    errors.push("Code is too short!");
    // throw errors;
  }
  if (code.length > 14) {
    errors.push("Code is too long!");
    // console.log(errors);
    // throw errors;
  }
  if (!code.includes("-")) {
    errors.push("Code is missing a '-'."); 
    // throw errors;
  }
  if (code !== "jWhyYFh-eTx3qt") {
    errors.push("Code is incorrect.");
    // throw errors;
  }
  if (errors.length) {
    // errors.push(errors); 
    console.log(errors);
    throw errors;
  }
  return true;
}

module.exports = secretPasscode;