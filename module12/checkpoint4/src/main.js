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

// use .find()
function findParkByName(parks, name) {
  let findPark = parks.find((park) => park.name === name);
  console.log(findPark);
  return findPark;
}

// use .every()
function allParksAboveCertainSize(parks, minSize) { 
  let allBigParks = parks.every((park) => park.areaInSquareKm >= minSize);
  console.log(allBigParks);
  return allBigParks;
}

// use .filter() and .map()
function getBigParkNames(parks, minSize) { 
  const bigParks = parks.filter((park) => park.areaInSquareKm >= minSize)
  console.log(bigParks);
  const parkNames = bigParks.map((big) => big.name);
  console.log(parkNames);
  return parkNames;

}

// use .filter() and .some()
function doesStateHaveOneBigPark(parks, minSize, state) { 
  const parkState = parks.filter((park) => park.location.state >= state)
  console.log(parkState);
  const parkSize = parkState.some((pstate) => pstate.areaInSquareKm >= minSize);
  console.log(parkSize);
  return parkSize;

}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
