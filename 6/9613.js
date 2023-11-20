// 양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD(최대공약수)의 합 구하기

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(Number));
const T = input.splice(1)
const answer = [];

// T 배열을 순회하면서 각 테스트 케이스에 대해 최대공약수를 계산
T.forEach(v=>{
  const N = v[0];
  const nums = v.splice(1)
  let sum = 0;
  for(let i =0; i<nums.length-1; i++){
    for(let j = i+1; j<nums.length; j++){
      sum+=GCD(nums[i],nums[j])
    }
  }  
  answer.push(sum)
})

console.log(answer.join('\n'))

// 유클리드 호제법 ( 두 정수 a와 b의 최대공약수는 b와 a를 b로 나눈 나머지의 최대공약수와 동일 )
// 나머지가 0이 될 때까지 반복하여 나머지가 0이 되면 나누는 수가 최대공약수
function GCD(a,b){
  if(b==0)return a;
  return a>b? GCD(b,a%b): GCD(a,b%a)
}