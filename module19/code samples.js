// if (!encode) {
      //   for (let i = 0; i < input.length; i++) {
      //   if (input[i] === ' ') {
      //   finished += ' ';
      //   } else if (1 === 1) {  // true

      //   // access each character in the input
      //   let char = input[i];
        
      //   // check if the character is a letter
      //   if (char.match (/[a-z]/i)) {  // ignoring case
        
      //     //turn to a number
      //   const charcode = input.charCodeAt (i);
      //   let temp = charcode - 97 - shift; // calculating temp code
      //   if (temp >= 0) {
      //   char = String.fromCharCode (temp % 26 + 97); // 
      //   } else {
      //   char = String.fromCharCode (26 + temp + 97); } }
      //   // add to the finished string
      //   finished += char; } }
      //   return finished.toLowerCase (); 
      // } // end if



    //   let output = "";
    //   let shiftValue = 0;
  
    //   // invalid shift data
    //   if(!shift || shift > 25 || shift < -25) return false;
  
    //   for(let i =0; i < input.length; i++) {
    //     let inputCode = input.toLowerCase().charCodeAt(i);
    //     let inputCharacter = input[i];
  
    //     // encode
    //     if (encode){
    //       shiftValue = inputCode + shift
  
    //         // upper A = 65, Z = 90
    //         if(inputCode >= 65 && inputCode <= 90) {
    //             inputCharacter = String.fromCharCode(((inputCode - 65 + shift) % 26) + 65);
    //             } // end if for upper
    
    //         // lower: a = 97, z = 122
    //         if(inputCode >= 97 && inputCode <= 122) {
    //             inputCharacter = String.fromCharCode(((inputCode - 97 + shift) % 26) + 97);
    //         } // end if for lower
  
    //     } // end outer if
        
    //     // decode
    //     else 
    //     if(!encode) {
    //       if(input[i] === ' ') { output += ' '; } else
          
    //       if (1 === 1) {
    //         if(inputCode >= 97 && inputCode <= 122) {
    //           let temp = inputCode - 97 - shift;
    //           if (temp >= 0){
    //             inputCharacter = String.fromCharCode(temp % 26 + 97);
    //           } else {
    //             inputCharacter = String.fromCharCode (26 + temp + 97); 
    //           }
    //         } 
    //     output += inputCharacter;
  
    //   } // end for
    //   console.log(`input:  ${input}`);
    //   console.log(`output: ${output}`);
    //   return output;
    // }
  
    let output = "";
  
    // invalid shift data
    if(!shift || shift > 25 || shift < -25) return false;

    for(let i =0; i < input.length; i++) {
      let inputCode = input.charCodeAt(i);
      let inputCharacter = input[i];
      let temp = inputCode - 97

      // encode
        if (encode){
          // upper A = 65, Z = 90
          if(inputCode >= 65 && inputCode <= 90) {
            inputCharacter = String.fromCharCode(((inputCode - 65 + shift) % 26) + 65);
            } // end if for upper
          // lower: a = 97, z = 122
          if(inputCode >= 97 && inputCode <= 122) {
              inputCharacter = String.fromCharCode(((temp + shift) % 26) + 97);
          } // end if for lower
          inputCharacter = String.fromCharCode(inputCode + shift);
        } // end encode
        else if (temp >= 0){
          inputCharacter = String.fromCharCode(temp % 26 + 97);
        } else {
          inputCharacter = String.fromCharCode (26 + temp + 97); 
        }



        
        output += inputCharacter;
    } // end for
    console.log(`input:  ${input}`);
    console.log(`output: ${output}`);
    return output.toLowerCase();



    return axios
    .get(url)
    // .then( (response) => {
    //     console.log(response.data);  
    //     return response.id === id;
    // })
    .then((exists) => {
      if (exists) throw `Constellation "${body.name}" already exists.`;
      return axios.put(url,body);
      })
    // .then(({ data }) => console.log(data))
    .catch((error) => {
      console.log(error.message);
    }); // end catch