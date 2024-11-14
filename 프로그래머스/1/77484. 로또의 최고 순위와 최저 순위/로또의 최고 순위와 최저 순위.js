function solution(lottos, win_nums) {
    let answer = [];
    // filter를 사용하여 lottos의 숫자 중 win_nums에 포함된 숫자만 거르기
    const sameNumber = lottos.filter(num => win_nums.includes(num)).length; // 맞춘 로또 숫자 개수
    // filter를 사용하여 lottos에서 숫자가 0인 경우만 거르기
    const zero = lottos.filter(num => num === 0).length; // 0의 개수
    
    // 7 - sameNumber를 사용하여 맞춘 숫자 개수에 따라 순위를 계산
    let min = 7 - sameNumber >= 6 ? 6 : 7 - sameNumber;
    // min - zero를 사용하여 0을 모두 당첨 번호에 맞춘 경우
    let max = min - zero < 1 ? 1 : min - zero
        
    answer = [max, min]
    return answer;
}