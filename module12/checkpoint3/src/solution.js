function printNames(names) {
  // your solution here
  names.forEach(name => console.log(name));
}

function logTreeType(trees) {
  // your solution here
  trees.forEach(tree => console.log(tree.type));
}

function totalPoints(points) {
  // your solution here
  let sum = 0;
  points.forEach((point) => console.log(sum += point));
  return sum;
}

function buildSentence(words) {
  var stringResult = "";
  words.forEach(sentence); // passing in the results of the sentence function
  
  function sentence(item) { // passing in each word in the array
    console.log(item);
    stringResult += item + " "; 
  }
  return stringResult ;
}

function logPercentages(decimals) {
  // your solution here
  decimals.forEach((decimal) => console.log(decimal*100 + "%"));
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages
}