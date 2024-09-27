process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); // [5, 3] 의 배열 중 a는 0번째 인덱스 별5개, b는 1번째 인덱스 3줄
  for (let i = 0; i < b; i++) {
    // 입력값 3 만큼 반복문
    let star = ""; // 변수 초기화
    for (let j = 0; j < a; j++) {
      // 위 for문이 한번 돌아갈 때마다 입력값 5 만큼 반복
      star += "*"; // *로 채우기
    }
    console.log(star);
  }
});
