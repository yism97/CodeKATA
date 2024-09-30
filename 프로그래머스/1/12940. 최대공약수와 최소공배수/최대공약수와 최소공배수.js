// 반복문
function solution(int1, int2) {
    // 최초 입력값의 곱을 미리 할당
    const GCD = int1 * int2;
    // 나머지r값이 0이 될때까지 remainder 수행
    while (int2 !== 0) {
        const r = int1 % int2;
        int1 = int2;
        int2 = r;
    };
    // [최대공약수, 최소공배수] 반환
    return [int1, GCD / int1];
};
// 최소공배수(LCM) = (입력값 A * 입력값 B) /(나누기) 최대공약수(GCD)