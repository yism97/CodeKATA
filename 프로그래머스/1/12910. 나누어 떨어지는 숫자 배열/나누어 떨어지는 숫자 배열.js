function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        } 
    }
    if (answer.length === 0) { // divisor로 나누어 떨어지는 element가 하나도 없다면
        answer.push(-1); // 배열에 -1을 담아 반환
    }
    answer.sort((a, b) => a - b); // 오름차순으로 정렬
    return answer;
}