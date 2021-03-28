// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius.js");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const expected = "4432423352125413";
        const actual = polybiusModule("thinkful");
        expect(actual).to.eql(expected); 
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = "424222221351";
        const actual = polybiusModule("jiggle");
        expect(actual).to.eql(expected); 
    });
    it("should leave spaces as is", () => {
        const expected = "2345 23513434112251";
        const actual = polybiusModule("my message");
        expect(actual).to.eql(expected); 
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "message";
        const actual = polybiusModule("23513434112251");
        expect(actual).to.eql(expected); 
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const expected = "ij22221351";
        const actual = polybiusModule("424222221351");
        expect(actual).to.equal(expected); 
    });
    it("should leave spaces as is", () => {
        const expected = "my message";
        const actual = polybiusModule("2345 23513434112251");
        expect(actual).to.eql(expected); 
    });
    it("should return false if the length of all numbers is odd", () => {
        const expected = false;
        const actual = polybiusModule("2345 235134341122514");
        expect(actual).to.eql(expected); 
    });
});

