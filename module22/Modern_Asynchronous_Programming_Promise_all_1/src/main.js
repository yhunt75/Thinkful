const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    // console.log(url);
    return axios.delete(url)
      });
    return Promise.all(promises).then((results) => results.map((result, index) => result = { id: ids[index] }));
  
}

module.exports = {
  bulkDelete,
};
