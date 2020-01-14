/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let  reverse = 0;
  let temp = x;
  let max = Math.pow(2,31);


  if (x < 0) {
    temp = -temp;
  }
  while(temp) {
    reverse *= 10;
    reverse += temp % 10;
    temp = Number.parseInt(temp/10);
  }
  if(reverse < -max || reverse >= max ){
    return 0;
  }
  if (x < 0) {
    reverse = -reverse;
  }
  return reverse;
};
