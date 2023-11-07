// 재민이가 최종적으로 적어 낸 수의 합을 출력

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
//  fs 모듈로 입력 값을 받아 줄 바꿈을 기준 값으로 배열을 만들어  map과 Number를 활용해 정수로 만듦

// input의 0번째 요소는 단어의 개수이므로 N으로 선언, 데이터를 처리해 줄 스택을 선언
const N = input[0];
const stack = new Array();


// input의 1번째 요소부터 N번째 요소까지 확인 후 0이 아니라면 스택에 담아주고 0이라면 최근에 쓴 수를 지운다
for(let i = 1; i <= N; i++) {
    if(input[i] === 0){
        stack.pop();
    } else {
        stack.push(input[i]);
    }
}

// reduce의 누적합을 활용하여 stack의 값을 모두 더해 반환
console.log(stack.reduce((acc, cur) => acc + cur, 0));