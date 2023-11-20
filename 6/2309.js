// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램
// 일곱 난쟁이의 키의 합이 100

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

// 두 요소를 제외한 나머지 7개의 합이 100인 경우 출력

const Total = input.reduce((r,v)=>{return r+v},0)
let answer = ''

// 두 개의 요소를 선택하고, 합이 100이 되는 경우를 찾기 위한 중첩된 반복문
for(let i = 0; i<9; i++){
  if(answer.length>0)break;
  // 이미 답을 찾았다면 반복문 종료
  for(let j = i+1; j<9; j++){
    
    if(Total-input[i]-input[j]==100){
        // 선택한 두 요소를 제외하고, 오름차순으로 정렬
      const truth = input.filter((_,k)=>k!=i&&k!=j).sort((a,b)=>a-b)

      //  // 정답 출력
      answer = truth.join('\n')
      console.log(answer)
      break;
    }
  }
}