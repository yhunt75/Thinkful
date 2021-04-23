const {expect} = require('chai')

let city = "Taylor";
let state = "Texas";

describe("getBreweries", async () => {
  it('should display brewery and website', async () => {
    let actual = await getBreweries(city, state);
    let expected = "Texas Beer Company\nhttp://www.texasbeerco.com"
    expect(actual).to.eql(expected)
  })
})
