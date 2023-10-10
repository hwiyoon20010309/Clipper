// 색종이
// 100*100의 2차원 배열을 미리 만들어두고, 그 배열 내부를 채우는 방식
let [TC, ...input] = require("fs").readFileSync("dev/stdin").toString().split("\n");
// 배열 비구조화 할당
// 배열의 첫 번째 원소를 TC에 할당하고 나머지 모든 원소를 input 배열에 할당
input = input.map((i) => i.split(" "));
const arr = Array.from(Array(100), () => Array(100).fill(0));
// 100x100 크기의 2차원 배열 arr을 생성하고, 모든 요소를 0으로 초기화
//  1로 표시된 영역을 마지막에 count
let count = 0;

for (let i = 0; i < TC; i++) {
  let startX = +input[i][0]; 
  let startY = +input[i][1]; 
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (arr[startX + l][startY + m] !== 0) {
        continue;
      }
      // 만약 현재 위치의 값이 0이 아니라면, 이미 1로 표시된 영역이므로 다음 위치를 확인하도록 continue
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count++;
      }
      // 현재 위치의 값이 0이면, 해당 위치를 1로 표시하고 count 변수를 증가
    }
  }
}
console.log(count);