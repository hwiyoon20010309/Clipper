const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 첫째 줄에 N의 진짜 약수의 개수가 주어짐
let number; // 진짜 약수의 개수

rl.question('N의 약수의 개수: ', (answer) => {
  number = parseInt(answer);

  let max = 0, min = 1000000;

  // 둘째 줄에는 N의 진짜 약수가 주어짐
  rl.question('N의 진짜 약수를 입력하세요: ', (divisors) => {
    const divisorArray = divisors.split(' ').map(Number);

    for (let i = 0; i < number; i++) {
      const num = divisorArray[i];
      if (num > max)
        max = num;
      if (num < min)
        min = num;
    }

    console.log(min * max);
    rl.close();
  });
});