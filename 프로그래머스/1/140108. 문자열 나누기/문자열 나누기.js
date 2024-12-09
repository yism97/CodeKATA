function solution(s) {
    let result = 0;
    let stack = []; // 기준 문자를 추적하는 스택
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) { // 배열 길이가 0이면 새로운 구간 시작
            stack.push(s[i]);
        } else {
             // 스택의 마지막 문자와 현재 문자가 같은지 비교
            if(stack[stack.length - 1] === s[i]) {
                stack.push(s[i]); // 같은 문자면 스택에 추가
            } else {
                stack.pop(); // 다른 문자면 스택에서 마지막 문자 제거
            }
        }
        
        if (stack.length === 0) {
            // 기준 문자와 다른 문자의 개수가 같아졌을 때 분할
            result++;
        }
    }
    // 반복문 종료 후 스택에 남아 있는 부분 처리
    if (stack.length > 0) {
        result++;
    }
    
    return result;
}