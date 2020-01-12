function isPalindrome(str) {
  for(let ix = 0 ; ix < str.length/2; ix++) {

    if(str[ix] !==  str[str.length-1-ix]) {
      return false;
    }
  }

  return true;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';
  let max = 0;

  if (s.length > 0) {

    result = s[0];
    max = 1;
  }
  for (let ix = 0; ix < s.length; ix++) {
    let temp = s;
    while(true) {
      const lastIdx = temp.lastIndexOf(s[ix]);
      if (lastIdx === -1 || ix >= lastIdx || max > (lastIdx - ix)) {
        break;
      }
      const str = temp.substring(ix, lastIdx + 1);
      if (isPalindrome(str) && max < str.length) {
        max = str.length;
        result = str;
        break;
      } else {
        temp = temp.substring(0, lastIdx);
      }
    }

    if (max > s.length-ix){
      break;
    }
  }

  return  result;
};
