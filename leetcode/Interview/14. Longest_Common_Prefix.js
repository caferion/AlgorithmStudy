/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return '';
  }
  let result = strs[0];
  for(let ix = 1; ix < strs.length; ix++) {
    while(strs[ix].indexOf(result) !== 0) {
      result = result.substring(0, result.length-1)
    }
  }
  return result;
};
