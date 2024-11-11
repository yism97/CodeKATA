function solution(number, limit, power) {
    let answer = 0;
    for (let i = 0; i <= number; i++) {
        let divisorCount = 0;
        for (let j = 0; j <= Math.sqrt(i); j++) {
            if(i % j === 0) { // j가 i의 약수 일때
                divisorCount++;
                if(j !== i / j) {
                    divisorCount++;
                }
            }
        }
         // 약수 개수가 limit을 초과하면 power를 더하고, 그렇지 않으면 약수 개수를 더함
        if (divisorCount > limit) {
            answer += power;
        } else {
            answer += divisorCount;
        }
    }
    return answer;
}