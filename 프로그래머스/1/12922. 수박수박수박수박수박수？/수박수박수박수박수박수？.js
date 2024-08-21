function solution(n) {
    let answer = '';
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            answer += "수" // 2로 나누어 떨어지면(짝수인 경우) "수"를 붙여준다. 
        } else {
            answer += "박" // 그 외에는(홀수인 경우) 박을 붙여준다
        }
    }
    return answer;
}