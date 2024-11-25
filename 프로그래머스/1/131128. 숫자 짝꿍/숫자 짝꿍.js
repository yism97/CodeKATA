function solution(X, Y) {
    let result = "";
    X = X.split('');
    Y = Y.split('');
    
    for(let i = 0; i < 10; i++) {
        const x = X.filter(a => Number(a) === i).length
        const y = Y.filter(a => Number(a) === i).length
        result+=String(i).repeat(Math.min(x,y))
    }
    if(result === '') return '-1'
    if(Number(result) === 0) return '0'
    return result.split('').sort((a,b) => Number(b)-Number(a)).join('');
}
