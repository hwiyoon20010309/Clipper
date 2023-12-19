// 날짜 계산

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter three numbers (separated by space): ', (input) => {
    const [e, s, m] = input.split(' ').map(Number);

    let a = 1, b = 1, c = 1;
    let count = 0;

    // 조건문을 사용하여 e, s, m이 각각의 범위를 넘어가면 1로 초기화하여 순환
    while (true) {
        // count 변수를 사용하여 숫자가 같아질 때까지의 횟수를 기록
        count++;
        if (e === a && s === b && m === c) {
            break;
        }

        a++;
        b++;
        c++;

        if (a === 16) a = 1;
        if (b === 29) b = 1;
        if (c === 20) c = 1;
    }

    console.log(count);

    rl.close();
});