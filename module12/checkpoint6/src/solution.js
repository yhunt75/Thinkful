function sortWords(words) {
  // your solution here
  words.sort((w1, w2) =>
  w1.toLowerCase() > w2.toLowerCase() ? 1 : -1
);
console.log(words);
return words;
}

function sortNumbers(numbers) {
  // your solution here
  numbers.sort((n1, n2) => n1 > n2 ? 1 : -1);
  console.log(numbers);
  return numbers;  
}

function largestFirst(numbers) {
  // your solution here
  numbers.sort((n1, n2) => n1 > n2 ? -1 : 1);
  console.log(numbers);
  return numbers;  
}

function sortFlowersByZone(flowers) {
  // your solution here
  flowers.sort((flowerA, flowerB) => (flowerA.zone > flowerB.zone ? 1 : -1));
  console.log(flowers);
  return flowers;
}

function sortByLength(strings) {
  // your solution here
  strings.sort((s1, s2) => (s1.length > s2.length ? 1 : -1));
  console.log(strings);
  return strings;
}

module.exports = {
   sortWords,
   sortNumbers,
   largestFirst,
   sortFlowersByZone,
   sortByLength
}