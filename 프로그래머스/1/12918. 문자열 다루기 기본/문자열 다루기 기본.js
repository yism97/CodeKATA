function solution(s) {
    let answer = parseInt(s);
    
    if((s.length === 4 || s.length === 6) && s == answer) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}