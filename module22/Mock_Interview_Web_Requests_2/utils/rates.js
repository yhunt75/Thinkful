const axios = require("axios");

const currency1 = "USD";
const currency2 = "EUR";

async function getRatesSolution(currency) {
  const res = await axios.get(`https://api.ratesapi.io/api/latest?base=${currency}`)
  return res.data.rates
}




module.exports = {currency1, currency2, getRatesSolution}