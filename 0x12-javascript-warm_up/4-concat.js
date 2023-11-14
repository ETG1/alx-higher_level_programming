#!/usr/bin/node

const fA = process.argv[2];
const sA = process.argv[3];

if (!fA || !sA) {
  console.log("Undefined");
} else {
  console.log(`${fA} is ${sA}`);
}
