function solution(k, score) {
    let result = [];
    // 명예의전당(k)을 담는 배열 생성
    let temp = [];
    // score에 담긴 점수를 하나씩 꺼내기
    score.map(e => {
        // 명예의 전당(temp)에 점수 넣기
        temp.push(e);
        // 명예의 전당(temp)배열을 내림차순으로 정렬한뒤, k 이후 요소 제거
        temp.sort((a, b) => b - a).splice(k);
        result.push(Math.min(...temp)); // 명예의전당temp에서 최솟값을 뽑아 result에 넣기
    });
    
    return result;
}