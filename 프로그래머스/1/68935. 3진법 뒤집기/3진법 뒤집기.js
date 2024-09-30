function solution(n) {
    var answer = 0;
    
    let a = n.toString(3) // 10진법 => 3진법
    a = a.split("").reverse().join("")
    
    answer = parseInt(a,3); // 3진법을 10진법으로 변환 parseInt(변수, 현재 진법값)
    
    return answer;
}