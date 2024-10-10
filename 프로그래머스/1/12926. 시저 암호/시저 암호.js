function solution(s, n) {
    // 대문자와 소문자를 구분하여 다루기 위해 변수에 대문자열과 소문자열을 할당
    let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let Lower = 'abcdefghijklmnopqrstuvwxyz'
    let answer = '';
    
    for(let i = 0; i < s.length; i++){
        let text = s[i];
        // 문자가 아닌 공백일 경우 덧셈 할당
        if (text === " "){
            answer += " ";
            continue;
        }
        // s의 문자 하나하나를 A-Z에 속하는지, a-z에 속하는지 있을 시 upper, 없다면 lower 할당
        // includes로 구분한 다음 indexOf로 문자열 위치를 찾아서 그만큼 더해줘서 반환
        let textArr = Upper.includes(text) ? Upper : Lower;
        // 할당한 문자열에 매개변수 s에 해당하는 인덱스와 n 더하기
        let index = textArr.indexOf(text) + n;
        // 만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같을 경우 인덱스 - 문자열 길이 빼기
        if (index >= textArr.length) index -= textArr.length;
        // 계산한 인덱스에 해당하는 문자 덧셈 할당
        answer += textArr[index];
    }
    return answer;
}