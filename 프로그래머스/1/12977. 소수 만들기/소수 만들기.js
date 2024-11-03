function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                // 선택된 세 숫자의 합
                if(sosu(sum)) answer++                 
             }
        }
    }      
    return answer;
}
let sosu = (sum) => {
for (let i = 2; i < sum; i++){
    if (sum % i === 0) return false;
}
    return true;
}