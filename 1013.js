const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// .toString().trim(): 읽어온 데이터를 문자열로 변환하고 양 끝의 공백을 제거

const strs = input.slice(1).map((str) => str.trim());
// map 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고 그 결과를 새로운 배열에 저장
// strs 배열에는 공백이 제거된 데이터 요소들이 저장

// 주어진 문자열 str이 특정 패턴을 따르는지 확인하는 함수 선언
function checkPattern(str) {
  let index = 0;
  while (index < str.length) {
    if (str[index] === '1') {
      if (index + 2 < str.length && str[index + 1] === '0' && str[index + 2] === '0') {
        index += 3;
        while (index < str.length && str[index] === '0') index++;

        if (str[index] === '1') index++;
        else return false;

        while (index < str.length && str[index] === '1') {
          if (index + 2 < str.length && str[index + 1] === '0' && str[index + 2] === '0') break;
          else index++;
        }
      } else return false;
    } else {
      if (str[index + 1] === '1') index += 2;
      else return false;
    }
  }
  return true;
}
strs.map((str) => {
  if (checkPattern(str)) console.log('YES');
  else console.log('NO');
});
// strs 배열의 각 문자열에 대해 checkPattern 함수를 호출하고, 
// 패턴을 만족하는 경우 "YES"를 출력하고 그렇지 않은 경우 "NO"를 출력