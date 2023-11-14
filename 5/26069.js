// 붙임성 좋은 총총이

let input = [12,
    `bnb2011 chansol`,
    `chansol chogahui05`,
    `chogahui05 jthis`,
    `jthis ChongChong`,
    `jthis jyheo98`,
    `jyheo98 lms0806`,
    `lms0806 pichulia`,
    `pichulia pjshwa`,
    `pjshwa r4pidstart`,
    `r4pidstart swoon`,
    `swoon tony9402`,
    `tony9402 bnb2011`,
  ];
  
  let N = parseInt(input[0]); // 주어진 데이터에서 친구 관계의 총 개수
  let arr = []; // 중복을 제거한 친구 목록을 담은 배열
  
  for (let i = 1; i <= N; i++) {
    let person = input[i].split(' ');
    // 현재 순회 중인 줄에서 두 사람 간의 관계를 나타내는 문자열을 공백 기준으로 분리하여 'person' 배열에 저장

  // chongchong 관계 확인
    if (person[0] === "ChongChong") {
      arr.push("ChongChong");
      arr.push(person[1]);
    } else if (person[1] === "ChongChong") {
      arr.push("ChongChong");
      arr.push(person[0]);
    }
  
    // ChongChong과의 관계가 아닌 경우, 이미 배열에 존재하는 친구와의 관계를 확인
    if (arr.includes(person[0]) && !arr.includes(person[1])) {
      arr.push(person[1]);
      // 배열에 person[0]이 포함되어 있지만 person[1]이 포함되어 있지 않으면, person[1]을 배열에 추가, 반대도 동일
    } else if (arr.includes(person[1]) && !arr.includes(person[0])) {
      arr.push(person[0]);
    }
  }
  
  let answer = new Set(arr);
  console.log(answer.size);