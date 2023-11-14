#!/usr/bin/node

const fA = process.argv[2];
const integerValue = parseInt(fA);


if (!isNaN(integerValue)) {
  console.log(`My number: ${integerValue}`);
} else {
  console.log("Not a number");
}
