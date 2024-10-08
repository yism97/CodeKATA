function solution(sizes) {
    
  const widthArr = sizes.map(arr => Math.min(...arr));
  const heightArr = sizes.map(arr => Math.max(...arr));
    
  return Math.max(...widthArr) * Math.max(...heightArr);
}