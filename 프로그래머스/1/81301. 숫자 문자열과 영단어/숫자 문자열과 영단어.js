function solution(s) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s;
    
    for(let i = 0; i < num.length; i++) {
        let arr = answer.split(num[i]);
console.log(arr)
        answer = arr.join(i);
console.log(answer)
    }
    return Number(answer);
}