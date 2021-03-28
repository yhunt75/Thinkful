// Write your tests here!
const expect = require("chai").expect;
const partitionStudentsByScore = require("../src/solution.js");


describe("partitionStudentsByScore", () => {
  const students = [ 
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  it("students correctly partitioned into their appropriate arrays", () => {
  const expected = [[students[1]],[students[0],students[2]]];
  const actual = partitionStudentsByScore(students, 8);
  expect(actual).to.eql(expected); 
  });
  it("it is possible for all students to go into one of the arrays", () => {
    const expected = [[],[students[0],students[1],students[2]]];
    const actual = partitionStudentsByScore(students, 2);
    expect(actual).to.eql(expected);
    });
it("if the student list is empty, return an array of two arrays", () => {
    const expected = [[],[]];
    const actual = partitionStudentsByScore([],[]);
    expect(actual).to.eql(expected);
    });
});
