    function solution(absolutes, signs) {
    var answer = 0; // 1. return 해야 하는 answer 생성
          // 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
         // 2-1. 두 배열은 크기가 같음
    for (var i=0; i < absolutes.length; i++ ) {
        // 부호(+, -) 에 따른 처리
        if (signs[i] === true) {
            // 값이 true 인 경우 양수
            answer = answer + absolutes[i];
        } else if(signs [i] === false) {
            // 값이 false 인 경우 음수
            answer = answer - absolutes[i];
        }
    }
    return answer;}