// 1부터 N까지의 수로 이루어진 순열 -> 사전순으로 다음에 오는 순열을 구하는 프로그램


// 1. v[idx - 1] < v[idx]를 만족하는 가장 큰 idx를 찾는다
// 2. idx2 >= idx이면서 v[idx2] > v[idx2-1]을 만족하는 가장 큰 idx2를 찾는다.
//3. v[idx - 1]과 v[idx2]를 뒤바꿔준다.
//4. idx부터 순열을 뒤집어준다.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let v = [];

rl.question('N: ', (answer) => {
  N = parseInt(answer);

  rl.question('element: ', (answer) => {
    v = answer.split(' ').map(Number);

    let idx = N - 1;

    while (idx > 0 && v[idx - 1] >= v[idx])
      idx--;

    if (idx === 0) {
      console.log(-1);
      rl.close();
      return;
    }

    let idx2 = N - 1;

    while (v[idx - 1] >= v[idx2])
      idx2--;

    [v[idx - 1], v[idx2]] = [v[idx2], v[idx - 1]];

    idx2 = N - 1;

    while (idx < idx2) {
      [v[idx], v[idx2]] = [v[idx2], v[idx]];
      idx++;
      idx2--;
    }

    console.log(v.join(' '));
    rl.close();
  });
});
