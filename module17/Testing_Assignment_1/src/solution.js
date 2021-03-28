/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let below = [];
  let above = [];
  
  for (let i = 0; i < students.length; i++) { 
    students[i].score < score ? below.push(students[i]) : above.push(students[i]);
  } // end for
  console.log([below,above]);
  return [below,above];
}

module.exports = partitionStudentsByScore;
