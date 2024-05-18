#!/usr/bin/node

const request = require('request');
const args = process.argv;

request(args[2], function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }
  let count = 0;
  const data = JSON.parse(body);
  data.results.forEach(function (film) {
    film.characters.forEach(function (charact) {
      if (charact === 'https://swapi-api.hbtn.io/api/people/18/') {
        count++;
      }
    });
  });
  console.log(count);
});
