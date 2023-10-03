const input = require('fs').readFileSync(/dev/stdin).toString().trim().split('\n');
// Node.js의 fs 모듈을 사용하여 파일 시스템과 상호 작용
// readFileSync 함수는 동기적으로 파일을 읽어오며 여기서는 /dev/stdin을 읽어옴
// /dev/stdin은 Unix 계열 운영체제에서 표준 입력 스트림을 나타내는 특수한 파일 경로

// .toString().trim(): readFileSync로 읽은 데이터를 문자열로 변환하고, 양쪽 끝의 공백 문자를 제거
// 이렇게 하면 입력 데이터의 앞뒤에 있는 공백이 제거되고 순수한 텍스트 데이터가 남음

// .split('\n'): 문자열을 줄 바꿈 문자 (\n)를 기준으로 분리하여 배열로 저장
// 이렇게 하면 각 줄의 텍스트가 배열의 요소로 들어감

const str = input[0];

const lng = str.length/2;
const left = str.slice(0,lng);
const right = str.slice(Number.isInteger(lng)?lng:parseInt(lng)+1);
// lng이 정수인지 확인하고, 정수가 아니면 정수로 변환하여 오른쪽 절반을 right 변수에 저장
// 문자열의 길이가 홀수일 경우 중앙 문자는 양쪽 절반 중 하나에 포함

if(left===right.split('').reverse().join('')) console.log(1);
// 왼쪽 절반 left와 오른쪽 절반 right를 뒤집은 다음 문자열로 만들어 비교 
// 만약 두 문자열이 같다면, 입력 문자열 str은 팰린드롬이므로 다음 단계를 수행
// 입력 문자열이 팰린드롬이면 1을 출력
else console.log(0);
// 입력 문자열이 팰린드롬이 아니면 0을 출력