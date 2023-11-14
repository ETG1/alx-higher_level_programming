#!/usr/bin/node

const argument = process.argv[2];
const x = parseInt(argument);

if (!isNaN(x)) {
  // Loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
