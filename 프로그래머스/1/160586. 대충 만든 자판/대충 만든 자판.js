function solution(keymap, targets) {
    let answer = []; // 결과를 저장할 배열

    for (const target of targets) {
        let totalPress = 0; // 각 문자열의 입력 횟수 합계
        let isInvalid = false; // 유효하지 않은 문자가 있는지 체크

        for (const char of target) {
            let minPress = Infinity; // 최소 입력 횟수 초기화

            for (const row of keymap) {
                const index = row.indexOf(char); // 문자의 위치를 찾음
                if (index !== -1) {
                    minPress = Math.min(minPress, index + 1); // 최소값 갱신
                }
            }

            if (minPress === Infinity) {
                isInvalid = true; // 문자를 찾을 수 없으면 유효하지 않음
                break; // 더 이상 계산할 필요가 없음
            }

            totalPress += minPress; // 최소 입력 횟수를 누적
        }

        // 유효하지 않은 문자가 있다면 -1을 추가
        answer.push(isInvalid ? -1 : totalPress);
    }

    return answer;
}
