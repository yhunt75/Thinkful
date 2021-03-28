const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = `${BASE_URL}/constellations`;

function index() {
  axios 
    .get(url) 
    .then( (response) => {
    const result = response.data.filter((constellation) => {
      console.log(constellation.name);  
      return constellation.name;
    });
    console.log(result); })
    .catch( (error) => {
    console.log(error.message); });  
}

function create(body) {
  axios 
    .post(url, {
      name: "Triangulum",
      meaning: "Triangle",
      starsWithPlanets: 3,
      quadrant: "NQ1",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch( (error) => {
    console.log(error.message); });
}

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios 
    .get(url) 
    .then( (response) => {
      console.log(response.data);
      return response.id === id;
    })
    .catch( (error) => {
    console.log(error.message); });  
}

function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios 
    .put(url,body) 
    .then( (response) => {
      console.log(response.data);
      return response.id === body.id;
    })
    .catch( (error) => {
    console.log(error.message); });  
}

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios 
    .delete(url)
    .then( (response) => {
        console.log(response.data);
        return response.id;
      })
      .catch( (error) => {
      console.log(error.message); }); 
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};


//https://masteringjs.io/tutorials/axios/put