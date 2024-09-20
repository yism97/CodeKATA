function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let count = 0;
        for ( let j = 1; j <= i; j++){
            if (i % j === 0) count ++; // 1부터 시작하는 i보다 작은 j 중에 i 가 j로 나누어 떨어지면 약수의 개수로 더해준다.
        }
        answer = count % 2 === 0 ? answer + i : answer - i; // 약수의 개수가 짝수인 i는 더해주고 홀수인 i는 빼준다. 
    }
    return answer;
}