// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

  if( !alphabet || alphabet.length < 26 ) return false; 
  if(alphabet) {
    let first = alphabet;
    let second = alphabet
    for(let i = 0; i < alphabet.length; i++) {
      if (second.includes(first[i])) return false;
    }
  }
  let upperAlpha = alphabet.toUpperCase();
  let cipher = '';
  input.split('').forEach(str => {
    if (alphabet.indexOf(str) !== -1 || upperAlpha.indexOf(str) !== -1) {
      let finStr = '';
      if (str === str.toUpperCase()) {
        finStr = upperAlpha.substr(upperAlpha.indexOf(str, upperAlpha[-1])) + upperAlpha.substr(0, upperAlpha.indexOf(str))
        cipher += finStr[finStr.indexOf(str) + 13]
      } else {
        finStr = alphabet.substr(alphabet.indexOf(str, alphabet[-1])) + alphabet.substr(0, alphabet.indexOf(str))
        cipher += finStr[finStr.indexOf(str) + 13]
      }
    } else {
       cipher += str;
    }
  });
  console.log(`sub alpha: ${alphabet}`);
  console.log(`input : ${input}`);
  console.log(`cipher : ${cipher}`);
  return cipher
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
