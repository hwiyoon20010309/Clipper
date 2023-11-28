// N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력
const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split("\n")
 
const firstLine = inputs[0].split(" ")
const secondLine = inputs[1].split(" ").map(el => parseInt(el))
 
const N = parseInt(firstLine[0])
const M = parseInt(firstLine[1])
 
let max = 0
//3장의 카드 ->  i, j, k 3개의 index로 반복문 3개
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    for(let k = 0; k < N; k++) {
      // 동일한 카드를 선택 할 수는 없기 때문에 아래 조건의 경우 다음 loop로 
      if(i == j || i == k || j == k) {
        continue;
      }
 
      // 서로 다른 카드가 선택된 경우 M을 초과하지 않는 최대값인지 확인 후 저장
      const sum = secondLine[i] + secondLine[j] + secondLine[k]
      if(sum > max && sum <= M) {
        max = sum
      }
 
      // 규칙에 맞는 숫자가 나온 경우에 더이상 계산을 할 필요가 없기 떄문에 종료
      if(max == M) {
        break;
      }
    }
  }
}
 
console.log(max)