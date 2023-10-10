// 조작한 새로운 평균 출력
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
// 입력된 점수의 개수
const score = input[1].split(' ').map(Number);
// 공백으로 구분하여 배열 score에 저장

score.sort((a, b) => b - a);
// sort 함수를 사용해 배열들을 내림차순으로 정렬하고 첫번째 값인 최댓값 m을 구하기

const m = score[0]; 
// 가장 높은 점수를 변수 m에 저장
const newScore = score.map(score => score/m*100);
// 각 점수를 최고 점수에 대한 백분율로 변환한 값을 새 배열 newScore에 저장

let sum = 0;
for(let i=0; i<n; i++)
{
    sum += newScore[i];
}
console.log(sum/n);