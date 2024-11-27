function solution(n, lost, reserve) {
    let answer = 0;
    
    // 중복 제거 및 오름차순 정렬
    let realLost = lost.filter((L) => !reserve.includes(L)).sort((a,b) => a - b);
    let realReserve = reserve.filter((R) => !lost.includes(R)).sort((a,b) => a - b);
    
    // 체육복 빌려주기
    for(let i = 0; i < realLost.length; i++) {
        let lostNum = realLost[i] 
        // 예를 들어 realLost = [2, 4]
        
        let prevIndex = realReserve.indexOf(lostNum - 1); 
        // realReserve = [1, 3, 5] 일때 lostNum = 2, lostNum - 1 = 1, 인덱스는 0
        if(prevIndex !== -1) { // 앞번호 학생이 여분을 가진 경우
            realReserve.splice(prevIndex, 1); //  해당 학생을 realReserve에서 제거
            answer++; // 체육복을 빌린 학생 수를 1 증가
            continue; // 뒷번호를 확인없이 바로 다음 잃어버린 학생으로 넘어감
        }
        let nextIndex = realReserve.indexOf(lostNum + 1); 
        // realReserve = [3, 5] 일때 lostNum = 4, lostNum + 1 = 5, 인덱스는 1
        if(nextIndex !== -1) {// 뒷번호 학생이 여분을 가진 경우
            realReserve.splice(nextIndex, 1); // 해당 학생을 realReserve에서 제거
            answer++;
        }
    }
    
    return answer += n - realLost.length;
    // 체육복을 빌린 학생 수 += 전체 학생 - 체육복을 잃어버린 학생
}