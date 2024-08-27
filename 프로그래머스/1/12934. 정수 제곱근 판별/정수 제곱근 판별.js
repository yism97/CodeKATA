function solution(n) {
    var answer = 0;
    let i = Math.sqrt(n); // 만약 n이 4이면 i 는 2
    if (i % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
        answer = -1;
    } else {
        answer = Math.pow(i+1,2); // 제곱근일 경우
    }
    return answer
}