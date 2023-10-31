// 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, 
// y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 입력을 읽고 개행 문자('\n')로 각 줄을 나누어 배열로 저장

const N = input.shift();
// 입력의 첫 번째 줄을 추출하여 'N' 변수에 저장하고, 입력 배열에서 제거
// 'N'은 좌표의 개수를 나타냄

const coords = input.map((coord) => coord.split(' ').map(Number));
// 나머지 줄을 파싱하여 좌표를 추출, 각 줄은 공백으로 구분되며 숫자로 변환되어 'coords' 배열에 저장

coords.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
});
// 'coords' 배열을 정렬, 먼저 각 좌표의 두 번째 요소 (y-좌표)를 비교
// 만약 이 값이 같다면 첫 번째 요소 (x-좌표)를 비교
// 이렇게 함으로써 좌표는 먼저 y-좌표로 정렬되고 그 다음 x-좌표로 정렬됨

let answer = '';
coords.forEach((coord) => {
    answer += coord[0] + ' ' + coord[1] + '\n';
});
// 정렬된 'coords' 배열을 반복하며 원하는 순서로 좌표의 문자열 표현을 만듦
// 이 문자열은 'answer' 변수에 저장

console.log(answer);
// 정렬된 좌표가 포함된 'answer'를 출력