function solution(n, m, section) {
    let result = 0;
    let lastpainted = 0;
    
    for (let i = 0; i < section.length; i++) {
        if(section[i] > lastpainted) {
            result++
            lastpainted = section[i] + m -1
        }
        
    }
    return result;
}