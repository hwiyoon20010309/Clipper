// 문자열 S가 주어졌을 때, 모든 접미사를 사전순으로 정렬한 다음 출력


var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('');
var stack = [...input]; // input값을 stack에 넣어줌
var answer = [];
var tmp = [];
for(var i=0; i<input.length; i++){
    tmp.unshift(stack.pop()); 
    answer.push(tmp.join('').trim());
}
console.log(answer.sort().join('\n').trim());

 
// stack에서 pop()으로 값을 꺼내서, 해당 값을 tmp 앞에 넣어준 다음
// tmp값을 join으로 붙여서 answer에 넣어준다
// answer를 sort함수를 사용하여 사전식으로 정렬한 후, 띄어쓰기(개행문자)를 기준으로 join해서 출력
