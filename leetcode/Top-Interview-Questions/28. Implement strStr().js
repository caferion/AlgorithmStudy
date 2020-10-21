/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  let index = 0;
  while(haystack.length >= needle.length) {
    if (haystack.substr(0,needle.length) === needle) {
      return index;
    } else {
      haystack = haystack.substring(1);
      index++
    }
  }

  return -1
};
