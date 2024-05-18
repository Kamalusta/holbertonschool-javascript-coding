#!/usr/bin/node

const fs = require('node:fs');
const args = process.argv;

fs.writeFile(args[2], args[3], err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
