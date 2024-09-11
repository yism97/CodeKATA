function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0 ) { // 짝수일 경우,
        answer = s[s.length / 2 - 1] + s[s.length / 2]; // s의 길이에 2를 나눠 -1 인 위치의 값과, s의 길이에 2를나눈 값을 출력
    } else {
        answer = s[Math.floor(s.length/2)]; // 홀수일 경우, 예를들면 5인경우 2로 나누면 2.5 반내림 하여 2번째 위치의 값을 출력
    }
    return answer;
}