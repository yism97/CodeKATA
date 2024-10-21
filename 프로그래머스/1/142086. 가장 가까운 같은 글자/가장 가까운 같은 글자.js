function solution(s) {
    let answer = [];
    let str = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!str.includes(s[i])) {
            answer.push(-1);
            str.push(s[i]);
        } else if(str.includes(s[i])){
            answer.push(i - str.lastIndexOf(s[i]));
            str.push(s[i])
        }
            
    }
    return answer;
}