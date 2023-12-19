// 1부터 N까지의 수 중에서 M개를 선택하여 나열하는 모든 경우의 수를 출력

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('N과 M을 입력하세요 : ', (input) => {
    const [inputN, inputM] = input.split(' ').map(Number);
    N = inputN;
    M = inputM;
    backtracking(0);
    rl.close();
});

let arr = new Array(9);
let used = new Array(9);
let N, M;

// 재귀함수
// 현재 인덱스 idx가 M과 같아지면 해당 순열을 출력하고 함수를 종료
function backtracking(idx) {
    if (idx === M) {
        console.log(arr.slice(0, M).join(' '));
        return;
    }
// 1부터 N까지의 숫자 중에서 사용하지 않은 숫자를 선택
// 선택한 숫자를 배열 arr에 할당
// 선택한 숫자를 표시하기 위해 used 배열을 이용, 선택 후에는 다시 사용 가능하도록 표시를 해제
// 다음 인덱스로 이동하여 재귀 호출을 수행

    for (let i = 1; i <= N; i++) {
        if (used[i] === 0) {
            arr[idx] = i;
            used[i] = 1;
            backtracking(idx + 1);
            used[i] = 0;
        }
    }
}

