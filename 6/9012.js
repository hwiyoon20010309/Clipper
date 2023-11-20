// "(" 개수와 ")"개수 같은 문자열 VPS 찾기

// 기호 '('와 ')'의 개수를 카운트하여 '(' 기호 일 시 1을 더해주고 ')' 기호 일 시 1을 빼준다
// VPS 문자열인 경우 '(' 기호와 ')' 개수가 같으므로 0이 나온다

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input.shift();
const result = [];

for (let i = 0; i < len; i++) {
    let cnt = 0;
    
    for (let s of input[i]) {
        cnt += s === "(" ? 1 : -1;
        
        if (cnt < 0) break;
    }
    
    result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));