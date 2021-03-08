/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  let accumulator = 0;
  let result = parks.reduce((acc, park, index) => {
    console.log(`index: ${index}`, `acc: ${acc}`, `square: ${park.areaInSquareKm}`);
    return acc + park.areaInSquareKm;
  }, accumulator);
  console.log(result);
  return result;
}

function parkNameAndState(parks) {
  return parks.reduce((acc, park) => {
    acc[park.name] = park.location.state;
    console.log(acc);
    return acc;
  }, {});
}

function parkByState(parks) {
  return parks.reduce((acc,value) => {
    if(acc[value.location.state]) {
      acc[value.location.state].push(value)
    } else {
      acc[value.location.state] = [value]
    }
    // console.log(acc);
    return acc;
},{}) 
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
