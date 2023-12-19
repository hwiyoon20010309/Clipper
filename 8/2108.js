// N(홀수)개의 수가 주어졌을 때 산술평균, 중앙값, 최빈값, 범위 구하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compare(a, b) {
    return a - b;
}

function arith(list) {
    const sum = list.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / list.length);
}

// 중앙값 함수
function median(list) {
    const n = list.length;
    if (n === 1) {
        return list[0];
    } else {
        return list[Math.floor((n + 1) / 2) - 1];
    }
}

// 최빈값 함수
function mode(list) {
    const ar = new Array(8001).fill(0);
    let max = 0, idx = 0, cnt = 0;

    for (const num of list) {
        const index = num + 4000;
        ar[index] += 1;

        if (ar[index] > max) {
            max = ar[index];
        }
    }

    for (let i = 0; i < 8001; i++) {
        if (ar[i] === 0) {
            continue;
        }

        if (ar[i] === max) {
            if (cnt === 0) {
                idx = i;
                cnt += 1;
            } else if (cnt === 1) {
                idx = i;
                break;
            }
        }
    }

    return idx - 4000;
}

function getRange(list) {
    const max = list[list.length - 1];
    const min = list[0];
    return max - min;
}

rl.question('N값을 입력하세요 : ', (n) => {
    rl.question('숫자들을 입력하세요 : ', (input) => {
        const list = input.split(' ').map(Number);
        list.sort(compare);

        console.log(arith(list));
        console.log(median(list));
        console.log(mode(list));
        console.log(getRange(list));

        rl.close();
    });
});