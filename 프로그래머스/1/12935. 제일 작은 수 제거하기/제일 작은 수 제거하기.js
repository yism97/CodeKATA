function solution(arr) {
    var answer = [];
    let num = Math.min(...arr); // num을 arr의 최솟값으로 정의
    arr.splice(arr.indexOf(num), 1); // arr에서 num의 자리를 없애줌

    if(arr.length < 1){ // 배열의 길이가 0일경우(요소가 1개일 경우)
        answer = [-1]; // [-1]을 리턴
    } else {
        answer = arr; // 그외에는 그대로 나열
    }
    return answer;
}