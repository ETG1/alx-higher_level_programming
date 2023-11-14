#!/usr/bin/node

const argumentsList = process.argv.slice(2);
const numbers = argumentsList.map(arg => parseInt(arg));
const integerNumbers = numbers.filter(num => !isNaN(num));
const sortedNumbers = integerNumbers.sort((a, b) => b - a);
const secondBiggest = sortedNumbers[1];

console.log(secondBiggest || 0);
