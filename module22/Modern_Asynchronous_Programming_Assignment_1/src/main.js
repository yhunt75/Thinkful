const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";


function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

async function update(constellation) {
  const id = constellation.id;
  const url = `${BASE_URL}/constellations/${id}`;

  try {
    return await axios.put(url, constellation);
  } catch (error) {
    console.log(`Updating constellation (id: ${id}) failed.`);
  }
}

async function bulkImport(constellations) {
  // check to see if it is an array
    if(!Array.isArray(constellations)) {
      return Promise.reject(error);
    }

  // check to see if constellation is valid
  let result = constellations.map( async (constellation) => {
    if(!isValid(constellation)) return Promise.reject(error)
    return await update(constellation)
  });

  return await Promise.allSettled(result); 
}

module.exports = { bulkImport, update };


