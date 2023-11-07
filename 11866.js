// N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램

const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N,K] = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a => +a);


// 반복문을 돌려 1번째 ~ K-1번째 까지의 수를 큐의 맨뒤로 보내고,
// K 번째 수를 큐에서 제거 
// 제거한 수는 출력 규칙에 따라서 answer 에 추가

// 큐의 사이즈가 1일때까지 반복
// 1이 되면 마지막 요소를 dequeue() 한 후 해당 숫자를 answer 에 추가하고 > 를 더해 출력

class Node{ 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) { // 큐에 새로운 값을 가진 노드를 추가하고 큐의 크기를 증가
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() { // 큐의 첫 번째 노드를 제거하고 그 값을 반환
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


let answer = '<';
let queue = new Queue();

for(let i=1; i<=N; i++) {
    queue.enqueue(i);
}

while(queue.size > 1) {
    for(let i=1; i<K; i++) {
        queue.enqueue(queue.dequeue());
    }
    answer += queue.dequeue() + ', ';
}


answer += queue.dequeue() + '>';
console.log(answer);