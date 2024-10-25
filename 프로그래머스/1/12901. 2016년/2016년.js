function solution(a, b) {
    // 요일 배열 (일요일부터 시작하는 자바스크립트의 getDay()에 맞게 배열을 설정)
    let answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
  // 월을 a - 1로 쓴 이유는 자바스크립트의 Date 객체는 월을 0부터 11까지로 처리하므로,
  // 1월을 나타내기 위해서는 a - 1을 전달
  // 일(day)을 의미하는 b는 Date 객체에서 1부터 시작하기 때문에 그대로 b
    let date = new Date(2016, a - 1, b);
    // getDay()메서드를 통해 해당 날짜의 요일을 0부터 6까지의 값으로 반환
    return answer[date.getDay()];
}