const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

const url = `${BASE_URL}/constellations`;
function getAllNames() {
  axios 
    .get(url) 
    .then( (response) => {
    const result = response.data.map((constellation) => {
      console.log(constellation.name);  
      return constellation.name;
    });
    console.log(result); })
    .catch( (error) => {
    console.log(error.message); });  
}

function getConstellationsByQuadrant(quadrant) {
  axios 
    .get(url) 
    .then( (response) => {
    const result = response.data.filter((constellation) => {
      console.log(constellation.name);  
      return constellation.quadrant === "SQ2";
    });
    console.log(result); })
    .catch( (error) => {
    console.log(error.message); });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
