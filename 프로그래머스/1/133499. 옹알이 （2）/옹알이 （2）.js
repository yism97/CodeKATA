function solution(babbling) {
    let answer = 0;
    const babble = ["aya", "ye", "woo", "ma"]
    
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        
        for (let j = 0; j < babble.length; j++){
            if(word.includes(babble[j].repeat(2))){
                break;
            }
            
            word = word.split(babble[j]).join(" ");
        }
        if(word.split(" ").join("").length === 0){
            answer++
        }
    }
    return answer;
}