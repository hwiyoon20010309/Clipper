// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}

// JavaScript built-in method인 sort()를 사용
// 문자를 정렬할 때는 sort()를 그냥 써줘도 되지만, 숫자를 정렬할 때는 sort((a, b) => a-b); 로 써줘야 함