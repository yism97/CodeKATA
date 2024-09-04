function solution(phone_number) {
    let range = phone_number.length - 4;
    return range = "*".repeat(range) + phone_number.substring(range);
}