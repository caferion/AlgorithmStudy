/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let temp = '';
  let max = 0;

  for (let ix = 0; ix < s.length; ix++) {
    const idx = temp.indexOf(s[ix]);
    if (idx !== -1) {
      temp += s[ix];
      temp = temp.substr(idx+1);
    } else {
      temp += s[ix];
    }
    if (max < temp.length) {
      max = temp.length;
    }
  }
  return max;
};
