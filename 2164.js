// N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램
// 연결리스트 - 각 노드를 포인터로 연결하는 자료구조 사용

const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //  새로운 값을 가진 노드를 리스트의 끝에 추가하고 tail을 업데이트
    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    // 첫 노드(head) 가져오고 head를 업데이트
    getHead() { 
        return this.head.val;
    }

    removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength() { // 연결리스트의 길이 알기
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
    cards.push(i);
}

while (cards.getLength() !== 1) { // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
}

// 제일 마지막에 남게 되는 카드 출력
console.log(cards.getHead());