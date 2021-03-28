// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// const caesarModule = (function () {
//   // you can add any code you want within this function scope

//   function caesar(input, shift, encode = true) {
//     // your solution code here
//   }

//   return {
//     caesar,
//   };
// })();

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    let output = "";
    let shiftValue = 0;

    // invalid shift data
    if(!shift || shift > 25 || shift < -25) {
      console.log(`shift: ${shift}`);
      return false;
    }

    for(let i = 0; i < input.length; i++) {
      let inputCode = input.toLowerCase().charCodeAt(i);
      let inputCharacter = input[i];

      // adding or substracting shift depending upon whether or not encode is true or false
      encode === true ? shiftValue = inputCode + shift : shiftValue = inputCode - shift;

      if (encode){
        // upper: A = 65, Z = 90
        if(inputCode >= 65 && inputCode <= 90) {
          inputCharacter = String.fromCharCode(((shiftValue - 65 ) % 26) + 65);
          } // end if for upper
  
          // lower: a = 97, z = 122
          if(inputCode >= 97 && inputCode <= 122) {
            inputCharacter = String.fromCharCode(((shiftValue - 97 ) % 26) + 97);
          } // end if for lower

      } // end outer if
      if(!encode){
        let temp = inputCode - 97 - shift;    // results in a negative number in some cases
        // console.log(`temp:     ${temp}`);
        // console.log(`inputCode: ${inputCode}`);
        // console.log(`shiftValue: ${shiftValue}`);
        if( shiftValue >= 65 && shiftValue <= 122) { 
          inputCharacter = String.fromCharCode(shiftValue); 
        } //end if
        // if( shiftValue < 65) { 
        //   inputCharacter = String.fromCharCode(shiftValue); 
        // }
        if (temp >= 0){                         // handles cases temp >=0
          inputCharacter = String.fromCharCode(temp % 26 + 97);
        } else if (inputCode < 65 ){
          inputCharacter = String.fromCharCode(inputCode); 
        } else 
        {
          inputCharacter = String.fromCharCode (26 + temp + 97); 
        }
      } // end if

      // view output
      output += inputCharacter;
    } // end for
    console.log(`input:  ${input}`);
    console.log(`output: ${output}`);
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
