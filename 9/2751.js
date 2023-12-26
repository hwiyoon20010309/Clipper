// 오름차순으로 정렬
// 힙정렬 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function heap(arr, n) {
    let count = n;

    // 최초 힙트리 생성
    for (let i = 1; i < count; i++) {
        let c = i;
        while (c > 0) {
            let p = Math.floor((c - 1) / 2);
            if (arr[p] < arr[c]) {
                swap(arr, p, c);
                c = p;
            } else {
                break;
            }
        }
    }
    swap(arr, 0, --count);

    // 힙정렬 수행
    while (count > 1) {
        let p = 0;

        // 자식 노드 있는 곳까지만 보면 됨
        while (p <= Math.floor(count / 2) - 1) {
            // 첫번 째 자식 노드
            let c = p * 2 + 1;

            // 자식 노드 중 큰 노드 선택
            if (c + 1 < count && arr[c] < arr[c + 1]) {
                c++;
            }

            // 부모 노드가 자식 노드보다 작으면 교체
            if (arr[p] < arr[c]) {
                swap(arr, p, c);
                p = c;
            } else {
                break;
            }
        }

        // 마지막과 교체 후 사이즈 줄여줌
        swap(arr, 0, count-- - 1);
    }
}

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function main() {
    // 배열 생성, 동적 할당 대신 직접 배열 선언
    let arr = [];

    // 배열 갯수 입력
    let n = parseInt(prompt("Enter the number of elements:"));

    // 입력 값 범위 처리
    if (n < 1 || n > 1000000) {
        console.log("Invalid input range.");
        return;
    }

    // 배열값 입력
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter element:")));
    }

    // 힙정렬 수행
    heap(arr, n);

    // 결과 출력
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

main();
