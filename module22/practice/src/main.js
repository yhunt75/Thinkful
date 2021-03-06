const axios = require("axios");

async function getTitle(id) {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  res = await res.data;
  return res.title;
}

async function getBody(id) {
  let res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  res = await res.data;
  return res.body;
}

async function getTitleAndBody(id) {
  let res1 = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let res2 = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  res1 = await res1.data;
  res2 = await res2.data;
  console.log(`Title: ${res1.title} \nBody: ${res2.body}`);
  return `Title: ${res1.title} \nBody: ${res2.body}`;
}

module.exports = {
  getTitle,
  getBody,
  getTitleAndBody,
};
