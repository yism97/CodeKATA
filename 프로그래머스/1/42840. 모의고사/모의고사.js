function solution(answers) {
    let answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    
    let one1 = answers.filter((a,i) => a === one[i%one.length]);
    let two1 = answers.filter((a,i) => a === two[i%two.length]);
    let three1 = answers.filter((a,i) => a === three[i%three.length]);
    let max = Math.max(one1.length, two1.length, three1.length);
    
    if (one1.length === max) {answer.push(1)};
    if (two1.length === max) {answer.push(2)};
    if (three1.length === max) {answer.push(3)};
    return answer;
}