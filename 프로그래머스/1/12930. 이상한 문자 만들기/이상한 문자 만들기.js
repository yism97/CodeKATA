function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    // 배열로 변환된 arr의 길이 만큼 반복하면서
    for(let i = 0; i < arr.length; i++){ 
        // 이중 for문으로 각 인덱스의 문자열 길이 만큼 반복한다
        for(let j = 0; j < arr[i].length; j++){ 
             // 인덱스가 짝수일 경우 result 변수에 대문자로 변환해서 뒤에 붙이고, 그렇지 않으면 소문자를 붙인다
            j % 2 === 0 ? answer += arr[i][j].toUpperCase() : answer += arr[i][j].toLowerCase();
}
        // 인덱스 번호가 arr 배열의 길이보다 작다면 공백을 붙인다
        i < arr.length - 1 ? answer += ' ' : null;
    }
    return answer;
}