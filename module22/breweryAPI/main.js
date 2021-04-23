/*  This app doesn't follow any best practices, and the JS file is incomplete. 
    When you're done, this app should allow a user to search for a city and state. Then display 
    a list of breweries in that state. The list should include the brewery's name and 
    a link to their website. You should make requests to this API: https://api.openbrewerydb.org/breweries.
    Make any necessary adjustments to make this app accessible. 
*/
const axios = require("axios");



async function getBreweries(city, state) {
  try {
    let response = await axios.get(
      `https://api.openbrewerydb.org/breweries?by_state=${state}&by_city=${city}`
    );
    // response = await response.json();
    if (!response.length) console.log("empty");
    let breweries = response.map((brewery) => {
      console.log(`${brewery.name}\n${brewery.website_url}\n\n`);
    });
    return breweries;
  } catch (error) {
    console.log("invalid data");
  }
}

module.export = {getBreweries};
