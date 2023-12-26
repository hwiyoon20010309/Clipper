// 집합 원소의 추가, 삭제, 확인, 반전, 전체 변경, 전체 삭제

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ss = 0;

function bit(ar, k) {
    if (ar === "add") {
        if ((ss & (1 << k)) === 0) {
            ss += 1 << k;
        }
    } else if (ar === "remove") {
        if ((ss & (1 << k)) > 0) {
            ss -= 1 << k;
        }
    } else if (ar === "check") {
        if ((ss & (1 << k)) > 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else if (ar === "toggle") {
        if ((ss & (1 << k)) === 0) {
            ss += 1 << k;
        } else {
            ss -= 1 << k;
        }
    } else if (ar === "all") {
        ss = (1 << 21) - 1;
    } else { // empty
        ss = 0;
    }
}

function main() {
    let n, i, arr, tmp;
    n = parseInt(prompt("Enter the value of n: "));
    
    for (i = 0; i < n; i++) {
        arr = prompt("Enter command: ");
        tmp = parseInt(prompt("Enter tmp: "));
        bit(arr, tmp);
    }
}

main();
