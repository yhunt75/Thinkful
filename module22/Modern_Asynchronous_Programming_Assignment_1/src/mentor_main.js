const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";


function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  //initalize axios 
  axios 
  //get the entire data set
  .get(`${BASE_URL}/constellations`)
  //return the responding data
  .then((response) => {
    return response.data
  })
  //if we error handle here
  .catch((error) => {
    return error.message
  })
  //after we get the data set, return the PUT request
  return axios.put(`${BASE_URL}/constellations/${constellation.id}`, constellation)
}

function bulkImport(constellations) {
  let validconst = []
  let validPromise = []
  if(!Array.isArray(constellations)){
    return Promise.reject({})
  }
  
  for(let contell of constellations){
    
    if(!isValid(contell.id, contell.name, contell.meaning, contell.meaning, contell.quadrant, contell.startsWithPlanets)){
      return Promise.reject({})
    }else{
      validconst.push(contell);
    }
  }
  
  //console.log(validconst)
  for(let valid of validconst){
    validPromise.push(update(valid))
  }
  //console.log(validPromise)
  Promise.allSettled(validPromise)
  
}

const constellations = [{
  id: "HwLvy2S",
  name: "Ursa Minor",
  meaning: "Little Bear",
  starsWithPlanets: 6,
  quadrant: "NQ3",
}];

console.log(bulkImport(constellations))
module.exports = { bulkImport, update };