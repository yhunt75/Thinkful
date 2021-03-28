/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let result = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name){
      result = students[i];
    } // end if
  } // end for
  console.log(result);
  return result;
}

module.exports = findStudentByName;
