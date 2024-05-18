#!/usr/bin/node

const request = require('request');
const args = process.argv;

request(args[2], function (error, response, body) {
  if (error) {
    console.log('Error:', error);
    return;
  }
  let count = 0;
  const user = {};
  let usernbr = 1;
  const data = JSON.parse(body);
  while (usernbr < 11) {
    data.forEach(element => {
      if (element.userId === usernbr && element.completed === true) {
        count++;
      }
    });
    user[usernbr] = count;
    usernbr++;
    count = 0;
  }
  console.log(user);
});
