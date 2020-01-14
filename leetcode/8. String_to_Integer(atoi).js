/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let max = Math.pow(2, 31);
  let result = parseInt(str);

  if (Number.isNaN(result)){
    return 0;
  } else if (result < -max) {
    return -max;
  } else if (result >= max) {
    return max-1;
  }
  return result
};
