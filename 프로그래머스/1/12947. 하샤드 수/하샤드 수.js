function solution(x) {
    let answer = true;
    let sum = x.toString().split('').reduce((prev, curr) => Number(prev) + Number(curr));
    return x % sum === 0;
}