function solution(food) {
    let answer = '';
    for(let i = 0; i < food.length; i++) {
        // i는 음식의 순서 번호와 같기 때문에 i를 음식의 반을 나눈 값으로 반복해주면 된다.
        answer += String(i).repeat(Math.floor(food[i]/2));
    }
    // 반복된 값에 0을 붙이고 ...문법으로 배열 형태로 만들고 reverse로 뒤집고, join으로 붙인 값을 더 더한다.
    return answer + '0' + [...answer].reverse().join('');
}