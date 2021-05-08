const axios = require("axios");
//Write your functions here

async function getAllCountries() {
  // const url = "https://restcountries.eu/rest/v2/all";
  let result = await axios.get("https://restcountries.eu/rest/v2/all");
  let countries = result.data.map((country) => {
    return {
      name: country.name,
      region: country.region,
      currencies: country.currencies,
    };
  });
  console.log(countries);
  return countries.splice(0, 5);
}

//Do not modify code below this line
module.exports = { getAllCountries };
