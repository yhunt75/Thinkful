const { expect } = require("chai");

const { getAllCountries } = require("../src/solution");

const { getAllCountriesSolution } = require("../test/countries");

describe("Get all countries", async () => {
  it("should display all countries", async () => {
    let countries = await getAllCountries();
    let countriesSolution = await getAllCountriesSolution();
    expect(countries).to.eql(countriesSolution);
  });
});
