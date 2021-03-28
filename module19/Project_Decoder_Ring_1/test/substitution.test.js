// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitution", () => {
    it("Error Handling: should return false if the substitution alphabet is missing", () => {
        const expected = false;
        const actual = substitutionModule("thinkful");
        expect(actual).to.eql(expected); 
    });
    it("Error Handling: should return false if the substitution alphabet is not exactly 26 characters", () => {
        const expected = "false";
        const actual = substitutionModule("message");
        expect(actual).to.eql(expected); 
    });
    it("Error Handling: should return false if the substitution alphabet does not contain unique characters", () => {
        const expected = "false";
        const actual = substitutionModule("message");
        expect(actual).to.eql(expected); 
    });
    it("Encode: should encode a message by using the given substitution alphabet", () => {
        const expected = "ykrrpik";
        const actual = substitutionModule("message");
        expect(actual).to.eql(expected); 
    });
    it("Encode: should work with any kind of key with unique characters", () => {
        const expected = "message";
        const actual = substitutionModule("ysii.rs");
        expect(actual).to.equal(expected); 
    });
    it("Encode: should preserve spaces", () => {
        const expected = "my message";
        const actual = substitutionModule("yp ysii.rs");
        expect(actual).to.eql(expected); 
    });
    it("Decode: should decode a message by using the given substitution alphabet", () => {
        const expected = "message";
        const actual = substitutionModule("ykrrpik");
        expect(actual).to.eql(expected); 
    });
    it("Decode: should work with any kind of key with unique characters", () => {
        const expected = "message";
        const actual = substitutionModule("ysii.rs");
        expect(actual).to.eql(expected); 
    });
    it("Decode: should preserve spaces", () => {
        const expected = "my message";
        const actual = substitutionModule("yp ysii.rs");
        expect(actual).to.eql(expected); 
    });
});