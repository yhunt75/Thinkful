const {expect} = require('chai')
const {getRates} = require('../src/solution')

const {getRatesSolution, getPastRates, currency1, currency2} = require('../utils/rates.js')

describe("getRates", async () => {
  it("should display todays foreign exchange rates for a given currency", async () => {
    let rates1 = await getRates(currency1);
    let rates2 = await getRatesSolution(currency1);
    expect(rates1).to.eql(rates2)
  })
    it('should display todays foreign exchange rates for a different currency', async () => {
    let rates1 = await getRates(currency2);
    let rates2 = await getRatesSolution(currency2);
    expect(rates1).to.eql(rates2)
  })
})
