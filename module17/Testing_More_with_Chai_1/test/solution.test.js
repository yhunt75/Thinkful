// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution.js");


describe("findStudentByName", () => {
  const students = [ 
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  it("should retun student info if found", () => {
  const expected = students[2];
  const actual = findStudentByName(students, "Natalee Vargas");
  expect(actual).to.eql(expected); 
  });
  it("should retun null if student cannot be found", () => {
    const expected = null;
    const actual = findStudentByName(students, "Terry Peters");
    expect(actual).to.be.null;
    });
});
