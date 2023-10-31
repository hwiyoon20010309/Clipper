// 커트라인 출력

const fs = require("fs");
let index = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫 번째 줄에 있는 정보
let index1 = index[0].split(" ");
// 0번 인덱스는 응시자 숫자
const num = index1[0];
// 1번 인덱스는 수상자 숫자
const award = index1[1];

// 두 번째 줄에 있는 정보
const grade = index[1].split(" ");

// 내림차순 정렬을 통해 높은 점수부터 차례대로 나열
grade.sort((a,b) => b - a);

// award가 2라면 grade 배열의 0,1번 인덱스에 있는 사람이 수상하는 것이므로
// 인덱스에는 award - 1을 사용
console.log(grade[award - 1]);