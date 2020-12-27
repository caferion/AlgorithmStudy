/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const d = [];
  d[0] = 1;
  d[0] = +s[0] === 0 ?  0 : 1;
  for (i=1; i <= s.length; i++) {
    const first = +s[i-1];
    const second = +(s[i-2] + s[i-1]);
    d[i] = 0;

    if (first > 0 && first < 10) {
      d[i] += d[i-1];
    }
    if (second > 9 && second < 27) {
      d[i] += d[i-2];
    }
  }
  return d[s.length];
};
