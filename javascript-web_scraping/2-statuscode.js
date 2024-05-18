#!/usr/bin/node

const request = require('request');
const args = process.argv;

request(args[2], function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('code:', response && response.statusCode);
});
