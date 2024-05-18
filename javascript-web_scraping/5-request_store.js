#!/usr/bin/node

const request = require('request');
const args = process.argv;
const fs = require('node:fs');

request(args[2], function (error, response, body) {
  if (error) {
    console.log('Error:', error);
    return;
  }
  fs.writeFile(args[3], body, err => {
    if (err) {
      console.error(err);
    }
  });
});
