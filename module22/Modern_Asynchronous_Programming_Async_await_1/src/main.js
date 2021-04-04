const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    let response = await tell(question)
        console.log(`Your question was: ${question}`);
        console.log(`Your fortune is: ${response}`);
    }
    catch(err) {
      console.log( `There was an error: ${err}` );
    };
}

async function fullSession(question) {
  try {  
    let greeting = await welcome();
    console.log(greeting);
    await getFortune(question);
    let departure = await goodbye();
    console.log(departure);
  }
  catch(err) {
      console.log(`There was an error: ${err}`);
    };
}

module.exports = { 
  getFortune, 
  fullSession 
};