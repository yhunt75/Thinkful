const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {

  if (!question) {
    return "There was an error: A question is required..."
  } 
  
  let result = [];
  result.push(`Your question was: ${question}`);
  result.push(`Your fortune is: ${tell(question)}`);
  
  return result;
}

function fullSession(question) {
   result = [];

    welcome().then((message) => {
        result.push(message)
    });

    const promise = tell(question);
    
    promise.then((fortune) => {
        result.push(`Your question was: ${question}`);
        result.push(`Your fortune is: ${fortune}`); 
        // getFortune(question)     // shouldn't the lines above be replaced with a call to the getFortune function?

    })
    
    promise.catch((error) => {
        result.push(`There was an error: ${error}`);
    }) 
    goodbye().then((message) => {
        result.push(message)
    })
    return result
}

module.exports = { getFortune, fullSession };
