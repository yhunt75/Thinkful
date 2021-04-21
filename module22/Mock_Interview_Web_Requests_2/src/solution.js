const axios = require("../utils/axios");
//Write your functions here

async function getRates(currency) { // currency = 'USD' or 'EUR'

  const result = await axios.get(`https://api.ratesapi.io/api/latest?base=${currency}`)
  console.log(result.data.rates);
  return result.data.rates;
}

//Do not modify code below this line
module.exports = {getRates};

