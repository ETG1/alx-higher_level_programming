#!/usr/bin/node

const argument = process.argv[2];
const size = parseInt(argument);

if (!isNaN(size)) {
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < size; j++) {
      line += 'X';
    }
    console.log(line);
  }
} else {
  console.log("Missing size");
}
