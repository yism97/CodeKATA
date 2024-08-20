function solution(n) {
	
    let answer = 0;
	let a = String(n);

	for (let i = 0; i < a.length; i++) {
		answer += parseInt(a[i]);
	}
	return answer;
}
