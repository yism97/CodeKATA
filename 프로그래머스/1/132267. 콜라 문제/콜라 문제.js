// a : 콜라를 받기 위해 마트에 줘야 하는 병 수
// b : 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
// n : 상빈이가 보유한 빈 병의 개수
function solution(a, b, n) {
    let result = 0;
    // 가지고 있는 빈 병 개수가 마트가 요구하는 개수보다 많은경우 교환이 가능 할때까지 반복
    while(n >= a) {
        // 빈병 n개를 가져다 주면 필요한 빈병 a당 받는 콜라의 개수
       let empty = Math.floor(n / a) * b
       // 새로 얻은 콜라 수를 총합에 더하기
       result += empty 
        // 남은 빈 병과 새로 받은 콜라의 빈 병을 합쳐서 다시 빈 병으로 설정
        n = empty + n % a
    
        
    }
    return result;
}
// /는 나눈 몫 , % 는 나눈 나머지