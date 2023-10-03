const input = require('fs').readFileSync(/dev/stdin).toString().trim().split('\n');
const str = input[0];

const lng = str.length/2
const left = str.slice(0,lng);
const right = str.slice(Number.isInteger(lng)?lng:parseInt(lng)+1)

if(left===right.split('').reverse().join('')) console.log(1)
else console.log(0)