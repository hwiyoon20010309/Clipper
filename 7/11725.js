// 루트 없는 트리가 주어지며 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램

// readline 인터페이스 설정
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// 첫 번째 라인에서는 N값을 입력받고, 이후의 라인은 그래프의 간선을 나타내는 순서쌍을 입력받기
let N = 0;
const input = [];
rl.on("line", (line) => {
    if (!N) {
        N = Number(line);
    } else {
        input.push(line);
        if (input.length === N - 1) {
            main();
        }
    }
});

//  빈 그래프와 답안 배열을 초기화
const main = () => {
    const graph = [];
    const answer = [];
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }


    // 이 루프는 입력한 간선을 기반으로 graph 배열을 채워 넣어 양방향 그래프를 만든다
    input.forEach((edge) => {
        const [from, to] = edge.split(" ");
        graph[from].push(to);
        graph[to].push(from);
    });


    // 표준 BFS(너비 우선 탐색) 함수
    // 주어진 노드(start)에서 시작하여 그래프를 탐색하고, 방문한 노드를 표시하고 answer 배열에 부모 노드를 기록
    const bfs = (start) => {
        const visited = new Array(N);
        visited[start] = true;

        const queue = [start];

        while (queue.length) {
            const cur = queue.shift();
            for (let i = 0; i < graph[cur].length; i++) {
                const next = graph[cur][i];

                if (!visited[next]) {
                    visited[next] = true;
                    answer[next] = cur;
                    queue.push(next);
                }
            }
        }
    };

    bfs(1);
    
    // BFS 순회 중에 찾은 각 노드의 부모 노드를 연결한 문자열(result)을 생성하고 콘솔에 결과를 출력
    let result = "";
    answer.forEach((ans) => (result += ans + "\n"));
    console.log(result);
};
