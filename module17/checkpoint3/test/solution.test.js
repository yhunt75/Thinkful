// Write your tests here!
const findStudentScoreByName = require("../src/solution.js");
const expect = require("chai").expect;

describe("findStudentScoreByName", () => {
  const students = [ 
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  it("should retun student info if found", () => {
  const expected = students[2].score;
  const actual = findStudentScoreByName(students, "Natalee Vargas");
  expect(actual).to.equal(expected); 
  });
  it("should retun null if student cannot be found", () => {
    const expected = null;
    const actual = findStudentScoreByName(students, "Terry Peters");
    expect(actual).to.equal(expected);
    });
});
