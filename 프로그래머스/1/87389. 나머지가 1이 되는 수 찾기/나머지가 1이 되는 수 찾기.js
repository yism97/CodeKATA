function solution(n) {
    let answer = 0;
      for (let i = 2; i < n; i++) { // n의 범위가 3부터 시작되므로 찾으려는 값 x의 범위에서 0과 1은 제외했다.
        if(n % i === 1) {
                 return i;
        }
    }
}