#!/usr/bin/node

const request = require('request');
const args = process.argv;

request(`https://swapi-api.hbtn.io/api/films/${args[2]}`, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
