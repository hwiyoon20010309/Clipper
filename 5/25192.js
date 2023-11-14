// 인사성 밝은 곰곰이

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, count = 0;
let m = new Set();
// m: 중복을 허용하지 않는 유니크한 값을 저장하기 위한 Set
let str;

rl.question('N: ', (answer) => {
  N = parseInt(answer);


  // 함수 재귀 호출
  function processInput() {
    rl.question('ENTER or a name: ', (input) => {
      str = input.trim();

      if (str === 'ENTER') {
        count += m.size;
        m.clear(); // 다음 'ENTER' 명령을 위해 m Set을 비움
        processInput();
      } 
      // 'ENTER' 명령이 아닌 경우에는 그냥 다음 입력을 기다림
      else {
        m.add(str);
        processInput();
      }
    });
  }

  processInput();
});

// close 이벤트 -> 사용자 입력 처리가 완료되고 인터페이스가 종료될 때 발생하는 이벤트
// m Set의 크기를 count에 더하고, 최종 결과를 콘솔에 출력
rl.on('close', () => {
  count += m.size;
  console.log(count);
});